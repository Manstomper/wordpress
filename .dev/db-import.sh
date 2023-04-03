#!/bin/bash

read -p "Importing database dump from import.sql. This will overwrite data. Proceed? (y/n) " proceed

if test "$proceed" != 'y'; then
    exit 0
fi

CONTAINER_ID=$(docker-compose ps -q mysql)

# For debugging purposes, uncomment to list email addresses caught by the regex below
#grep -E -o "\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b" import.sql
# Replace email addresses with x@y.dev
sed -E "s/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b/x@y.dev/g" import.sql > import.copy.sql;

# Import dump
docker exec -i $CONTAINER_ID mysql -uroot -ppassword -e "DROP DATABASE wordpress; CREATE DATABASE wordpress;"
docker exec -i $CONTAINER_ID mysql -uroot -ppassword wordpress < import.copy.sql

# Read variables from .env
# https://gist.github.com/mihow/9c7f559807069a03e302605691f85572?permalink_comment_id=3898844#gistcomment-3898844
set -a && source <(cat .env | sed -e '/^#/d;/^\s*$/d' -e "s/'/'\\\''/g" -e "s/=\(.*\)/='\1'/g") && set +a

read -p "Reduce database size by deleting older posts? (y/n) " DELETE_POSTS

if test "$DELETE_POSTS" != 'n'; then
    # Do the following:
    #    - Query post types except those excluded
    #    - Get default language from Polylang settings
    #    - Delete everything except 5 newest posts (limit to default language if set)
    ADDITIONAL_QUERIES='
      POST_TYPES=$(mysql -N -B -uroot -ppassword wordpress -e "SELECT DISTINCT post_type from ${TBL}posts WHERE post_type NOT IN (
          '\''acf-field'\''
          '\''acf-field-group'\''
          '\''attachment'\''
          '\''polylang_mo'\''
          '\''revision'\''
          '\''wp_global_styles'\''
      );")

      LANG=$(mysql -N -B -uroot -ppassword wordpress -e "SELECT option_value FROM wp_options WHERE option_name = '\''polylang'\'';")

      for TYPE in $POST_TYPES; do
          if [[ $LANG =~ default_lang\"\;s:[0-9]*?:\"([a-zA-Z]*?) ]]; then
              mysql -uroot -ppassword wordpress -e "DELETE FROM ${TBL}posts WHERE ID IN (
                  SELECT * FROM (
                      SELECT p.ID
                      FROM ${TBL}posts p
                      INNER JOIN ${TBL}term_relationships AS tr ON (p.ID = tr.object_id)
                      INNER JOIN ${TBL}term_taxonomy AS tt ON (tr.term_taxonomy_id = tt.term_taxonomy_id)
                      INNER JOIN ${TBL}terms AS t ON (t.term_id = tt.term_id)
                      AND p.post_type = '\''$TYPE'\''
                      AND tt.taxonomy = '\''language'\''
                      AND t.slug = '\''${BASH_REMATCH[1]}'\''
                      ORDER BY p.post_date
                      LIMIT 4, 1000000
                  ) result
              );"
          else
              mysql -uroot -ppassword wordpress -e "DELETE FROM ${TBL}posts WHERE ID IN (
                  SELECT * FROM (
                      SELECT ID FROM ${TBL}posts WHERE post_type = '\''$TYPE'\'' ORDER BY post_date DESC LIMIT 4, 1000000
                  ) result
              );"
          fi
      done
    '
fi

# Do the following:
#    - Delete all posts except those with status "publish"
#    - Depending on user choice, run commands defined above
#    - Delete transients
#    - Delete spam comments
#    - Delete orphaned post meta
#    - Delete orphaned taxonomy term relationships
#    - Delete orphaned comments
#    - Empty user table
#    - Empty user meta table
#    - Create admin user
#    - Reassign all posts to said user
DB_COMMANDS='
    TBL="'$TABLE_PREFIX'"

    mysql -uroot -ppassword wordpress -e "DELETE FROM ${TBL}posts WHERE post_status != '\''publish'\'';"

    '$ADDITIONAL_QUERIES'

    mysql -uroot -ppassword wordpress -e "
        DELETE FROM ${TBL}options WHERE option_name LIKE '\''%_transient_%'\'';
        DELETE FROM ${TBL}comments WHERE comment_approved = '\''spam'\'';
        DELETE pm FROM ${TBL}postmeta pm LEFT JOIN ${TBL}posts p ON p.ID = pm.post_id WHERE p.ID IS NULL;
        DELETE tr FROM ${TBL}term_relationships tr LEFT JOIN ${TBL}posts p ON tr.object_id = p.ID WHERE p.ID IS NULL;
        DELETE c FROM ${TBL}comments c LEFT JOIN ${TBL}posts p ON p.ID = c.comment_post_ID WHERE p.ID IS NULL;
        TRUNCATE ${TBL}users;
        TRUNCATE ${TBL}usermeta;
        INSERT INTO ${TBL}users VALUES (
            1, '\''admin'\'', '\''\$P\$Bs/LIA9ovAG8FCFdK/1FnQKLGMdjin0'\'', '\''admin'\'', '\''x@y.dev'\'', '\'''\'', '\''1970-01-01 00:00:00'\'', '\'''\'', 0, '\''admin'\''
        );
        INSERT INTO ${TBL}usermeta VALUES
            (1, 1, '\''wp_capabilities'\'', '\''a:1:{s:13:\"administrator\";b:1;}'\''),
            (2, 1, '\''wp_user_level'\'', '\''10'\'')
        ;
        UPDATE ${TBL}posts SET post_author = 1;
    "
'

docker exec $CONTAINER_ID /bin/bash -c "$DB_COMMANDS"

rm import.copy.sql

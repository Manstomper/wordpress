#!/bin/bash

printf -v FILE "${PWD##*/}-%(%Y%m%d)T.sql" -1

read -p "Exporting database to $FILE. Proceed? (y/n) " proceed

if test "$proceed" != 'y'; then
    exit 0
fi

CONTAINER_ID=$(docker-compose ps -q mysql)

# Read variables from .env
# https://gist.github.com/mihow/9c7f559807069a03e302605691f85572?permalink_comment_id=3898844#gistcomment-3898844
set -a && source <(cat .env | sed -e '/^#/d;/^\s*$/d' -e "s/'/'\\\''/g" -e "s/=\(.*\)/='\1'/g") && set +a

# Do the following:
#    - Delete transients
#    - Delete spam comments
#    - Delete orphaned post meta
#    - Delete orphaned taxonomy term relationships
#    - Delete orphaned comments
DB_COMMANDS='
    TBL="'$TABLE_PREFIX'"

    mysql -uroot -ppassword -e "DROP DATABASE IF EXISTS tempdb; CREATE DATABASE tempdb;"

    mysqldump -uroot -ppassword wordpress | mysql -uroot -ppassword tempdb

    mysql -uroot -ppassword tempdb -e "
        DELETE FROM ${TBL}options WHERE option_name LIKE '\''_transient_%'\'';
        DELETE FROM ${TBL}comments WHERE comment_approved = '\''spam'\'';
        DELETE pm FROM ${TBL}postmeta pm LEFT JOIN ${TBL}posts p ON p.ID = pm.post_id WHERE p.ID IS NULL;
        DELETE tr FROM ${TBL}term_relationships tr LEFT JOIN ${TBL}posts p ON tr.object_id = p.ID WHERE p.ID IS NULL;
        DELETE c FROM ${TBL}comments c LEFT JOIN ${TBL}posts p ON p.ID = c.comment_post_ID WHERE p.ID IS NULL;
    "
'

# Run above commands, then dump database
docker exec $CONTAINER_ID /bin/bash -c "$DB_COMMANDS" \
    && docker exec $CONTAINER_ID mysqldump -uroot -ppassword tempdb > "$FILE"

# Drop temporary database
docker exec $CONTAINER_ID mysql -uroot -ppassword -e "DROP DATABASE IF EXISTS tempdb;"

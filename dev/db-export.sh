#!/bin/bash

printf -v FILE "${PWD##*/}-%(%Y%m%d)T.sql" -1
CONTAINER=$(docker-compose ps -q mysql)

read -p "Exporting database to $FILE. Proceed? (y/n) " proceed

if test "$proceed" != 'y'; then
    exit 0
fi

DB_COMMANDS=$'
  mysql -u"root" -p"password" -e "DROP DATABASE IF EXISTS tempdb; CREATE DATABASE tempdb;"

  mysqldump -u"root" -p"password" wordpress | mysql -u"root" -p"password" tempdb

  mysql -u"root" -p"password" tempdb -e "
      DELETE FROM wp_posts WHERE post_type = \'revision\';
      DELETE pm FROM wp_postmeta pm LEFT JOIN wp_posts p ON p.ID = pm.post_id WHERE p.ID IS NULL;
      DELETE FROM wp_options WHERE option_name LIKE \'_transient_%\';
      DELETE FROM wp_comments WHERE comment_approved = \'spam\';
      TRUNCATE wp_users;
      TRUNCATE wp_usermeta;
      INSERT INTO wp_users VALUES (
          1, \'admin\', \'$P$Bs/LIA9ovAG8FCFdK/1FnQKLGMdjin0\', \'admin\', \'a@b.fi\', \'\', \'1970-01-01 00:00:00\', \'\', 0, \'admin\'
      );
      INSERT INTO wp_usermeta VALUES (
          1, 1, \'wp_capabilities\', \'a:1:{s:13:"administrator";b:1;}\'
      );
      UPDATE wp_posts SET post_author = 1;
  "

  POST_TYPES=$(mysql -N -B -u"root" -p"password" tempdb -e "SELECT DISTINCT post_type from wp_posts WHERE post_type NOT IN (
      \'acf-field\', \'acf-field-group\', \'attachment\', \'polylang_mo\', \'revision\', \'wp_global_styles\'
  );")

  for t in $POST_TYPES; do
      mysql -u"root" -p"password" tempdb -e "DELETE FROM wp_posts WHERE post_type = \'$t\' AND ID NOT IN (
          SELECT * FROM (
              SELECT ID FROM wp_posts WHERE post_type = \'$t\' ORDER BY post_date DESC LIMIT 5
          ) a
      );"
  done
'

docker exec $CONTAINER /bin/sh -c "$DB_COMMANDS" \
    && docker exec $CONTAINER mysqldump -u"root" -p"password" tempdb > "$FILE" \
    && find $FILE -type f -exec sed -i -E "s/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b/x@y.dev/g" {} \;

docker exec $CONTAINER mysql -u"root" -p"password" -e "DROP DATABASE IF EXISTS tempdb;"

# Add this before the line starting with "&& find $FILE" to list email addresses caught by regex (for debugging purposes)
# && grep -E -o "\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b" $FILE \

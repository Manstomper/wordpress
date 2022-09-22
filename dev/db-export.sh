#!/bin/bash

printf -v filename "${PWD##*/}-%(%Y%m%d)T.sql" -1

echo "Deleting transients" \
    && docker compose exec php /bin/sh -c 'cd /app-mount/public; wp transient delete --all --network --expired --allow-root' > /dev/null 2>&1 \
    && echo "Dumping database to $filename" \
    && docker-compose exec mysql mysqldump -u"root" -p"password" wordpress > "$filename"

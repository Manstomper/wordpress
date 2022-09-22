#!/bin/sh

read -p "Importing database dump from import.sql. This may overwrite data. Proceed? (y/n) " proceed

if test "$proceed" = 'y'; then
    docker exec -i $(docker-compose ps -q mysql) mysql -u"root" -p"password" wordpress < import.sql
fi

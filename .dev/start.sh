#!/bin/sh

# I came to the conclusion that this is not necessary. Just bookmark the site and run docker compose (re)start

#if [[ $(docker compose ps -q php 2>&1) =~ "no such service" ]]; then
#    echo "Container does not appear to exist. Building and starting..."

#    "${BASH_SOURCE%/*}/build.sh"
#else
#    echo "Container appears to exist. Restarting..."

#    docker compose restart
#fi

#source .env && echo "The site should now work from http://localhost:$WEB_PORT"

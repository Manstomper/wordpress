#!/bin/sh

docker-compose stop node \
    && docker-compose run --rm -v "$(pwd):/usr/src" -w /usr/src node sh -c "npm update && npm audit fix" \
    && docker-compose start node

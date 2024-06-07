#!/bin/bash

cp -n ./.dev/.env.local ./.env

docker build . -f "$(pwd)/.dev/php/Dockerfile" -t wp/php:8 \
    && docker compose up -d \
    && docker compose exec php sh -c "cd /app-mount && composer install --no-interaction" \
    && docker compose run --rm -v "$(pwd):/usr/src" node npm install \
    && docker compose restart node

source .env && echo "The site should now work from http://localhost:$WEB_PORT"
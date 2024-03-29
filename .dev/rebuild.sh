#!/bin/sh

cp -n ./.dev/.env.local ./.env

docker build . -f "$(pwd)/.dev/php/Dockerfile" -t wp/php:8.1.12 \
    && docker compose up -d \
    && docker compose exec php sh -c "cd /app-mount && composer install --no-interaction" \
    && docker compose run --rm -v "$(pwd):/usr/src" node npm install \
    && docker compose restart node

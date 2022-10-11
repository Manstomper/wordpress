#!/bin/sh

cp -n ./.env.local ./.env

docker build . -f "$(pwd)/dev/nginx/Dockerfile" -t rig/nginx:1.23.1 \
    && docker build . -f "$(pwd)/dev/php/Dockerfile" -t rig/php:8.1.9 \
    && docker-compose up -d \
    && docker-compose run --rm -v "$(pwd):/app-mount" -w /app-mount php sh -c "composer install --no-interaction"

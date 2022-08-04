#!/bin/sh

cp -n ./.env.local ./.env

docker build . -f "$(pwd)/local/nginx/Dockerfile" -t rig/nginx:1.21.5 \
    && docker build . -f "$(pwd)/local/php80/Dockerfile" -t rig/php:8.0.14 \
    && docker-compose up -d \
    && docker-compose run --rm -v "$(pwd):/app-mount" -w /app-mount php sh -c "composer install --no-interaction"

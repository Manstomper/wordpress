#!/bin/sh

docker build . -f "$(pwd)/local/nginx/Dockerfile" -t rig/nginx:1.21.5 \
    && docker build . -f "$(pwd)/local/php80/Dockerfile" -t rig/php:8.0.14-mysqli-gd-intl \
    && docker build . -f "$(pwd)/local/php80/composer/Dockerfile" -t rig/composer:2.2.5-php8.0.14 \
    && docker-compose up -d

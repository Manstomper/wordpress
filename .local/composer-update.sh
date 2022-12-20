#!/bin/sh

docker compose exec php sh -c "cd /app-mount && composer update --no-interaction"

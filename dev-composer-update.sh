#!/bin/sh

docker-compose run --rm -v "$(pwd):/app" composer sh -c "composer update --no-interaction"

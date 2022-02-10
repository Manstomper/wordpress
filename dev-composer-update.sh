#!/bin/sh

docker-compose run --rm -v "$(pwd):/app" composer composer update --no-interaction

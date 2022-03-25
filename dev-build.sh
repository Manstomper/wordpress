#!/bin/sh

docker-compose stop node \
    && docker-compose run --rm -v "$(pwd)/public/app/themes/demo/assets:/usr/src" -w /usr/src node sh -c "npm run build" \
    && docker-compose run --rm -v "$(pwd)/public:/public" -w /public/app/themes/demo php \
        sh -c "wp i18n make-pot . ./languages/rig.pot --domain=\"rig\" --exclude=\"./assets/src\" --allow-root && wp i18n make-json ./languages --no-purge --allow-root" \
    && docker-compose start node

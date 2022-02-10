FROM php:8.0.14-fpm-alpine3.15

RUN apk update \
    && apk add --no-cache \
        # Dependency required by the intl extension
        icu-dev \
        # Dependencies required by the gd extension
        libjpeg-turbo-dev \
        libpng-dev \
    # intl
    && docker-php-ext-install -j$(nproc) intl \
    # gd
    && docker-php-ext-configure gd --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd \
    # mysqli
    && docker-php-ext-install mysqli \
    # Remove unnecessary files
    && rm -rf /usr/src/php* \
    && rm -rf /usr/local/lib/php/test \
    && rm /usr/local/bin/phpdbg \
    && rm -rf /var/cache/*

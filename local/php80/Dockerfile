FROM php:8.1.9-fpm-alpine3.16
#FROM php:8.0.22-fpm-alpine3.16

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
    && rm -rf /var/cache/*

# Composer. Update version when appropriate.
COPY --from=composer:2.3.10 /usr/bin/composer /usr/local/bin/composer

# WP-CLI
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar \
    && chmod +x wp-cli.phar \
    && mv wp-cli.phar /usr/local/bin/wp

# Config
ADD ./local/php80/fpm.conf /usr/local/etc/php-fpm.d/zz-site.conf
ADD ./local/php80/php.ini /usr/local/etc/php/conf.d/site.ini

FROM php:8.1.12-fpm-alpine3.16

RUN apk update \
    && apk add --no-cache \
        # Dependency required by the intl extension
        icu-dev \
        # Dependencies required by the gd extension
        libjpeg-turbo-dev libwebp-dev libpng-dev \
        # ImageMagick and dependency required by the imagick extension (uncomment if necessary)
        #build-base autoconf imagemagick imagemagick-dev \
    # The intl extension
    && docker-php-ext-install -j$(nproc) intl \
    # The gd extension
    && docker-php-ext-configure gd --with-jpeg --with-webp && docker-php-ext-install -j$(nproc) gd \
    # The imagick extension (uncomment if necessary)
    #&& pecl install imagick && docker-php-ext-enable imagick \
    # The mysqli extension
    && docker-php-ext-install mysqli
    # Remove unnecessary files
    # Commented out until all build-time dependencies are cleaned
    #&& rm -rf /usr/src/php* \
    #&& rm -rf /var/cache/*

# Composer (update version when appropriate)
COPY --from=composer:2.4.4 /usr/bin/composer /usr/local/bin/composer

# WP-CLI
#RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar \
#    && chmod +x wp-cli.phar \
#    && mv wp-cli.phar /usr/local/bin/wp

# Config
ADD ./.dev/php/fpm.conf /usr/local/etc/php-fpm.d/zz-site.conf
ADD ./.dev/php/php.ini /usr/local/etc/php/conf.d/site.ini

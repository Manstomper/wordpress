# Set up local development

1. Install and start [Docker Desktop](https://www.docker.com/products/docker-desktop)
1. Clone this repository
1. Open a terminal and cd into its directory
1. Run `docker build . -f "$(pwd)/local/nginx/Dockerfile" -t rig/nginx:1.21.5 && docker build . -f "$(pwd)/local/php80/Dockerfile" -t rig/php:8.0.14-mysqli-gd-intl && docker build . -f "$(pwd)/local/php80/composer/Dockerfile" -t rig/composer:2.2.5-php8.0.14` (note that this is a one-time operation, and in the future these images will be served from a repository)
1. Run `dev-init.sh`
1. Prepare for a waiting game. Switch to the Docker Desktop app, click on the arrow next to the container and wait until composer is done (icon turns from green to grey) and npm install is done (log entry "webpack compiled successfully"). Hopefully we'll get a progress indication soon.
1. Open http://localhost

## Now what?

1. If you need to stop containers, e.g. to free up ports, run `./dev-stop.sh`
1. To continue working when containers are stopped, run `./dev.sh`
1. To update composer packages, run `./dev-composer.update.sh`
1. To update node packages, run `./dev-npm-update.sh`

If you've cloned this repository, the project is most likely been set up in Google Cloud Kubernetes. To push changes to the cloud, run `./publish.sh`.

## Import and export a database dump

You may need to manually replace the site URL when importing a dump.

Import: `docker compose exec mysql mysql -u"root" -p"password" wordpress < dump-import.sql`

Export: `docker compose exec mysql mysqldump -u"root" -p"password" wordpress > dump-export.sql`

## Change image version

Build image and change version in .env. When changing node major version, also change `"engines"` in package.json

An example to update PHP:

1. Create a directory local/php81
1. Search [Docker Hub](https://hub.docker.com/) for a suitable tag. Alpine version is recommended.
1. Copy Dockerfile and the composer directory from another PHP image build directory. Change version on the first line. For example `FROM php:8.0.14-fpm-alpine3.15` to `FROM php:8.1.2-fpm-alpine3.15`
1. Build the image with `docker build . -f "$(pwd)/local/php81/Dockerfile" -t rig/php:8.1.2-mysqli-gd-intl` (change to match your path and version)
1. Change PHP_VERSION in .env
1. Change `FROM` in php81/composer/Dockerfile. Also check if composer itself should be updated (if so, change COMPOSER_VERSION in .env).
1. Build the composer image with `docker build . -f "$(pwd)/local/php81/composer/Dockerfile" -t rig/composer:2.2.5-php8.1.2`

# Troubleshooting

If composer.json is missing `allow-plugins`, non-interactive mode will add entries but set them to false. Change the values to `true`.

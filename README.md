# Set up local development

1. Install and start [Docker Desktop](https://www.docker.com/products/docker-desktop)
1. Clone this repository
1. Open a terminal and cd into its directory
1. Run `docker build . -f "$(pwd)/local/nginx/Dockerfile" -t rig/nginx:1.21.5-alpine && docker build . -f "$(pwd)/local/php/Dockerfile" -t rig/php:8.0.14-fpm-alpine3.15-mysql-gd-intl && docker build . -f "$(pwd)/local/composer/Dockerfile" -t frc/composer:2.2.5-php8.0.14` (note that this is a one-time operation, and in the future these images will be served from a repository)
1. Run `dev-setup.sh`
1. Prepare for a waiting game. Switch to the Docker Desktop app, click on the arrow next to the container and wait until composer is done (icon turns from green to grey) and npm install is done (log entry "webpack compiled successfully"). Hopefully we'll get a progress indication soon.
1. Open http://localhost

## Now what?

1. If you need to stop containers, e.g. to free up ports, run `./dev-stop.sh`
1. If containers are stopped, run `./dev.sh`
1. To update composer packages, run `./dev-composer.update.sh`
1. To update node packages, run `./dev-npm-update.sh`

## Import and export a database dump

You may need to manually replace the site URL when importing a dump.

Import: `docker compose exec mysql mysql -u"root" -p"password" wordpress < dump-import.sql`

Export: `docker compose exec mysql mysqldump -u"root" -p"password" wordpress > dump-export.sql`

# Troubleshooting

If composer.json is missing `allow-plugins`, non-interactive mode will add entries but set them to false. Change the values to `true`.

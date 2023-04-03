# Set up local development

1. Install and start [Docker Desktop](https://www.docker.com/products/docker-desktop)
1. Clone this repository and cd into its directory
1. Run `.dev/start.sh`
1. Wait until composer and npm install are done
1. Open the URI printed in console

## Now what?

1. If you need to stop containers, e.g. to free up ports, run `docker compose stop`
1. If you need to delete containers, run `docker compose down`
1. To access the app container, run `.dev/cli.sh`. To update composer or node packages, run `composer update` or `npm update`. To run WP-CLI commands, cd into the public directory and run e.g. `wp core version --allow-root`

[Check the Wiki for more information.](https://github.com/Manstomper/wordpress/wiki)

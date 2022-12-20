# Set up local development

1. Install and start [Docker Desktop](https://www.docker.com/products/docker-desktop)
1. Clone this repository and cd into its directory
1. Run `.local/start.sh`
1. Wait until composer and npm install are done
1. Open http://localhost:8100

## Now what?

1. Add ACF license key to the .env file and run `.local/rebuild.sh`
1. If you need to stop containers, e.g. to free up ports, run `docker compose stop`
1. To update composer packages, run `.local/composer-update.sh`
1. To update node packages, run `.local/npm-update.sh`

[Check the Wiki for more information.](https://github.com/Manstomper/wordpress/wiki)

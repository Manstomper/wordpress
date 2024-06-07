# Set up local development

1. Install and start [Docker Desktop](https://www.docker.com/products/docker-desktop)
1. Clone this repository and cd into its directory
1. Run `.dev/build.sh`. This is a script that is tested in Ubuntu. If it doesn't work in your OS then check the file and run each step manually.)
1. Wait until composer and npm install are done
1. Open http://localhost:<port number here>

## Now what?

1. Add ACF license key to the .env file and run `.dev/rebuild.sh`
1. If you need to stop containers, e.g. to free up ports, run `docker compose stop`
1. To update composer packages, run `.dev/composer-update.sh`
1. To update node packages, run `.dev/npm-update.sh`

[Check the Wiki for more information.](https://github.com/Manstomper/wordpress/wiki)

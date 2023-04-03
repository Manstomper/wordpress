#!/bin/sh

docker compose exec php sh -c 'cd /app-mount; printf "\nYou should now be in the PHP container. You can run commands such as \"composer update\". To run WP-CLI commands, type \"cd public\" and then \"wp core version --allow-root\".\nType exit to quit.\n\n"; sh'
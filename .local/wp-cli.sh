#!/bin/sh

docker compose exec php sh -c 'cd /app-mount/public; printf "\nYou should now be in the PHP container. You can run commands such as \"wp core version --allow-root\".\nType exit to quit.\n\n"; sh'

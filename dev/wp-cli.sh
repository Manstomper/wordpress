#!/bin/sh

docker-compose exec php /bin/sh -c 'cd /app-mount/public; printf "\nYou should now be inside the PHP container. You can run commands such as \"wp core version --allow-root\".\nType exit to quit.\n\n"; /bin/sh'

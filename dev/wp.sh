#!/bin/sh

docker compose exec -it php /bin/sh -c 'cd /app-mount/public; echo "You are now in the PHP container. You can run commands such as \"wp core version --allow-root\""; /bin/sh'

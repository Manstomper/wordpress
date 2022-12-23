#!/bin/sh

docker compose exec -w /usr/src node sh -c "npm update && npm audit fix && npm run dev"

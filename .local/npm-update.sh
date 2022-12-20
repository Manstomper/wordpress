#!/bin/sh

docker compose exec node sh -c "cd /usr/src && npm update && npm audit fix"

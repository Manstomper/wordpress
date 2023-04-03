#!/bin/bash

echo ""

source .env && echo "The site should answer from http://localhost:$WEB_PORT"
echo ""

echo "Commands:"
echo "    .dev/cli.sh ........... Open terminal to run commands inside the PHP container"
echo "Database:"
echo "    .dev/db-export.sh ..... Export database to file, deleting unnecessary rows such as transients and orphaned data"
echo "    .dev/db-import.sh ..... Import database from file, deleting unnecessary rows and optionally reducing post amount"

echo ""

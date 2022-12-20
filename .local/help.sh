#!/bin/sh

echo ""
echo "Commands in containers:"
echo "    .local/composer-update.sh ...... Update composer dependencies"
echo "    .local/npm-update.sh ........... Update npm dependencies"
echo "    .local/wp-cli.sh ............... Open terminal to run wp-cli"
echo "Database:"
echo "    .local/db-export.sh ............ Export database to file, deleting unnecessary rows such as transients and orphaned data"
echo "    .local/db-import.sh ............ Import database from file, deleting unnecessary rows and optionally reducing post amount"
echo ""

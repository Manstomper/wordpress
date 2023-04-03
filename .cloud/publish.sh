#!/bin/sh

PROJECT_ID="my-project"
PROJECT_NAME="My project"
REPOSITORY_NAME="my-repository"
REPOSITORY_LOCATION="europe-north1"
COMPUTE_ZONE="europe-north1-a"
CLUSTER_NAME="my-cluster"
KUBE_CONTEXT="gke_my-project_europe-north1-a_my-cluster"
NGINX_VERSION="1.23.2"
PHP_VERSION="8.1.12"

kubectl config use-context $KUBE_CONTEXT \
    && docker compose run --rm -v "$(pwd):/usr/src" -w /usr/src node sh -c "npm run build" \
    && docker build . -f "$(pwd)/cloud/nginx/Dockerfile" -t $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/nginx:$NGINX_VERSION \
    && docker push $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/nginx:$NGINX_VERSION \
    && docker rmi $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/nginx:$NGINX_VERSION \
    && docker build . -f "$(pwd)/cloud/php/Dockerfile" -t $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/php:$PHP_VERSION \
    && docker push $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/php:$PHP_VERSION \
    && docker rmi $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/php:$PHP_VERSION \
    && kubectl rollout restart deployment php nginx

#!/bin/sh

PROJECT_ID="my-first-project-20220128"
PROJECT_NAME="My first project"
REPOSITORY_NAME="my-first-repository"
REPOSITORY_LOCATION="europe-north1"
COMPUTE_ZONE="europe-north1-a"
CLUSTER_NAME="my-first-cluster"
KUBE_CONTEXT="gke_my-first-project-20220128_europe-north1-a_my-first-cluster"

kubectl config use-context $KUBE_CONTEXT \
    && docker compose run --rm -v "$(pwd):/usr/src" -w /usr/src node sh -c "npm run build" \
    && docker build . -f "$(pwd)/cloud/nginx/Dockerfile" -t $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/nginx:1.21.5 \
    && docker push $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/nginx:1.21.5 \
    && docker rmi $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/nginx:1.21.5 \
    && docker build . -f "$(pwd)/cloud/php/Dockerfile" -t $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/php:8.0.14 \
    && docker push $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/php:8.0.14 \
    && docker rmi $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/php:8.0.14 \
    && kubectl rollout restart deployment php nginx

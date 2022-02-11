# Deploy to Google Cloud Kubernetes

This guide assumes that you have full access. If you are part of an organisation, there may be restrictions. If you run into any issues, ask your administrators for help.

To get a better understanding of the environment, you may want to log into the [Google Cloud Console](https://console.cloud.google.com/) and look around. Most things that we do with the Cloud SDK can be done via the Console.

## Pick names and configuration options

Let's set a few temporary environment variables that are used in commands later.

List valid artifact repository locations with `gcloud artifacts locations list`
List valid compute zones with `gcloud compute zones list`

Linux, MacOS:
```
PROJECT_ID="my-first-project-20220128"
PROJECT_NAME="My first project"
REPOSITORY_NAME="my-first-repository"
REPOSITORY_LOCATION="europe-north1"
COMPUTE_ZONE="europe-north1-a"
CLUSTER_NAME="my-first-cluster"
```
Windows PowerShell:
```
Set-Variable -Name "PROJECT_ID" -Value "my-first-project-20220128"
Set-Variable -Name "PROJECT_NAME" -Value "My first project"
Set-Variable -Name "REPOSITORY_NAME" -Value "my-first-repository"
Set-Variable -Name "REPOSITORY_LOCATION" -Value "europe-north1"
Set-Variable -Name "COMPUTE_ZONE" -Value "europe-north1-a"
Set-Variable -Name "CLUSTER_NAME" -Value "my-first-cluster"
```

## Install tools

1. Install the [Google Cloud SDK](https://cloud.google.com/sdk)
1. Install kubectl with `gcloud components install kubectl` TODO: check if this is necessary since Docker comes with some version of kubectl. If you run that command, you must delete the one in the Docker directory.
1. Clone this repository if you haven't done so already, open a terminal and cd into its directory

## Create and configure project

You will be prompted to enable the necessary APIs.

1. Create a project with `gcloud projects create $PROJECT_ID --name=$PROJECT_NAME --set-as-default`
1. Link a billing account in one of three ways
  - Ask your administrator to do it
  - Go to the [Google Cloud Console](https://console.cloud.google.com/), open the sidebar menu, click on Billing and Link a billing account
  - Get a list of billing accounts with `gcloud beta billing accounts list`. Make note of the ID. Run `gcloud beta billing projects link $PROJECT_ID --billing-account=0X0X0X-0X0X0X-0X0X0X`
1. Create a repository for our images with `gcloud artifacts repositories create $REPOSITORY_NAME --repository-format=docker --location=$REPOSITORY_LOCATION --project $PROJECT_ID`
1. Configure authentication for Docker with `gcloud auth configure-docker $REPOSITORY_LOCATION-docker.pkg.dev`
1. Set the default zone with `gcloud config set compute/zone $COMPUTE_ZONE`

## Build and push images

1. Stop the running node service with `docker compose stop node`
1. Build assets for production with `docker-compose run --rm -v "$(pwd):/usr/src" node npm run build`
1. Build the nginx image with `docker build . -f "$(pwd)/gke/nginx/Dockerfile" -t $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/nginx:1.21.5-alpine`
1. Push the nginx image with `docker push $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/nginx:1.21.5-alpine`
1. Delete the nginx image with `docker rmi $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/nginx:1.21.5-alpine`
1. Build the PHP image with `docker build . -f "$(pwd)/gke/php/Dockerfile" -t $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/php:8.0.14-fpm-alpine3.15`
1. Push the php image with `docker push $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/php:8.0.14-fpm-alpine3.15`
1. Delete the php image with `docker rmi $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/php:8.0.14-fpm-alpine3.15`
1. Tag the MySQL image with `docker tag mariadb:10.3.32 europe-north1-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/mariadb:10.3.32`
1. Push the MySQL image with `docker push $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/mariadb:10.3.32`
1. Untag the MySQL image with `docker rmi $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/mariadb:10.3.32`

## Set up Kubernetes resources

TODO: write about changing image names in deployments

1. Enable the API with `gcloud services enable container.googleapis.com --project $PROJECT_ID`
1. Create a cluster with `gcloud container clusters create $CLUSTER_NAME --zone $COMPUTE_ZONE --project $PROJECT_ID`
1. Set credentials with `gcloud container clusters get-credentials $CLUSTER_NAME --zone $COMPUTE_ZONE --project $PROJECT_ID`
1. Create Kubernetes resources with `kubectl apply -f gke/manifest`. If you create your own project with a different setup or change something in docker-compose.yml, [Kompose](https://kubernetes.io/docs/tasks/configure-pod-container/translate-compose-kubernetes/) helps with creating these manifest files.
1. Run `kubectl get service`. Under EXTERNAL-IP, the nginx-tcp is probably still in a pending state. Run the command again until there is an IP address. Copy it to the clipboard.
1. Try opening it in a browser. It will not work because the WordPress HOME_URL is incorrect.
1. Open gke/manifest/php-deployment.yaml and change https://foo.bar to http://IP-address
1. Run `kubectl apply -f cloud/manifest/php-deployment.yaml`
1. Now open the IP in a browser. It should start the WordPress installer.

## Update theme

Now we just build assets for production, repeat the process of building and pushing images, and rollout the deployments.

1. `docker compose run --rm -v "$(pwd):/usr/src" -w /usr/src node sh -c "npm run build"`
1. `docker build . -f "$(pwd)/gke/nginx/Dockerfile" -t $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/nginx:1.21.5-alpine`
1. `docker push $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/nginx:1.21.5-alpine`
1. `docker rmi $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/nginx:1.21.5-alpine`
1. `docker build . -f "$(pwd)/gke/php/Dockerfile" -t $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/php:8.0.14-fpm-alpine3.15`
1. `docker push $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/php:8.0.14-fpm-alpine3.15`
1. `docker rmi $REPOSITORY_LOCATION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/php:8.0.14-fpm-alpine3.15`
1. `kubectl rollout restart deployment nginx php`

# Troubleshooting and known issues

1. On Window 11, composer appears to hang when running `docker compose up -d` when dependencies have already been installed. Delete composer.lock and dependencies, run `docker compose down` and `docker compose up -d`
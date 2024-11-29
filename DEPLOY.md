# QTK Deployment Script and Dockerfile Documentation

This document describes the functionality of the deploy.sh script and the Dockerfile located in the /home/admin/qtk directory on the server.

Th `deploy.sh` script is used to build and deploy a Docker image containing a pre-built Node.js application and Nginx server.

## Deployment
On the server, run the following:

```bash
git fetch
git pull --rebase origin/main
./scripts/deploy.sh
```

## Technical Reference Steps:

1. Build the Docker image:
    `docker build --no-cache . -t qtk/nginx:alpine`

    This command builds a Docker image using the current directory context (.) and tags it as qtk/nginx:alpine.
    The --no-cache flag instructs Docker to not use previously downloaded layers for the build, ensuring a fresh build every time.

2. Remote Deployment (Commented Out):
    There is a commented-out section for remote deployment using Docker Swarm.
    `docker context create qtk-swarm --docker host=tcp://<host>:2375`

    This line (commented out) would create a Docker context named qtk-swarm that connects to a Docker Swarm cluster running on the specified host and port (replace <host> with the actual host IP or hostname and <port> with the Swarm API port, typically 2375).

3. Deploy the Docker image:
    `docker stack deploy -c docker-compose.production.yaml qtk`

    This command deploys a Docker stack named qtk using the configuration defined in the docker-compose.production.yaml file.


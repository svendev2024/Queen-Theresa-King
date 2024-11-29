#!/bin/bash

docker build --no-cache . -t qtk/nginx:alpine

# TODO: Remote deploy
# docker context create qtk-swarm --docker host=tcp://<host>:2375

docker stack deploy -c docker-compose.production.yaml qtk

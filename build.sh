#!/bin/sh

TAG=coatsnmore/greeter:1

docker build -t $TAG .
docker run $TAG

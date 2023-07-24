#!/bin/bash

if [[ "$(uname -m)" == "arm64" ]]; then
  docker-compose -f docker-compose.arm64.yml up -d
else
  docker-compose -f docker-compose.x86_64.yml up -d
fi

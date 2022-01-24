#!/usr/bin/env sh
kratos migrate sql -c ./kratos.yml -e -y
kratos serve --dev --config=./kratos.yml

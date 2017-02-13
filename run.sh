#!/bin/bash
docker stop uod
docker rm uod
docker run -d --name "uod" -t -i -v $PWD:/usr/src/app:rw -p 3000:3000 charsi/uod
docker ps
docker exec -it uod /bin/bash

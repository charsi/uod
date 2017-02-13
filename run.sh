#!/bin/bash
docker stop uod;
docker rm uod;
docker run -d --name "uod" -t -i -v $PWD:/usr/src/app:rw -p 3000:3000 --net dockernet charsi/uod;
docker ps;
echo "run <docker exec -it uod /bin/bash> to connect to the container";

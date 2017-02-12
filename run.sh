#!/bin/bash

docker run -d -t -i -v /home/nishil/projects/uod/:/usr/src/app:rw -p 80:3000 charsi/uod
docker ps
echo "run <docker exec -it YOUR-CONTAINER-ID /bin/bash>" to log into the container

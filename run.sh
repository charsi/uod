#!/bin/bash
docker stop uod
docker rm uod
docker run -d --name "uod" -t -i -v $PWD:/usr/src/app -p 3000:3000 --net dockernet charsi/uod
docker exec -d uod gulp start
docker ps
echo "NOTICE: All done! UOD container started. Try http://localhost:3000/"
echo "NOTICE: use \"docker exec -it uod /bin/bash\" to log in to the container "

#!/bin/bash
docker rm -f uod
docker run -d --name "uod" -ti -v $PWD:/usr/src/app -p 3000:3000 charsi/uod
docker exec -d uod npm start gulp start-live
# docker ps
echo "NOTICE: All done! UOD container started. Try http://localhost:3000/"
echo "NOTICE: use \"docker exec -it uod /bin/bash\" to log in to the container "

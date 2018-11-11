#!/bin/bash
docker rm -f uod
docker run -d --name "uod" -ti -v $PWD:/usr/src/app -p 127.0.0.1:8000:8000 charsi/uod
docker exec -d uod npm run gulp start-live
# docker ps
echo "NOTICE: All done! UOD container started. Try http://localhost:8000/"
echo "NOTICE: use \"docker exec -it uod /bin/bash\" to log in to the container "

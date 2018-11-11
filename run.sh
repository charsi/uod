#!/bin/bash
docker rm -f uod
# 127.0.0.1 forces the app to be accesible from localhost only
# remove it to make the app publically accesible without using a reverse proxy (like nginx)
docker run -d --name "uod" -ti --rm -v $PWD/public:/src/public -p 127.0.0.1:8000:8000 charsi/uod
docker exec uod npm run gulp start-live
# docker ps
echo "NOTICE: All done! UOD container started. Try http://localhost:8000/"
echo "NOTICE: use \"docker exec -it uod /bin/bash\" to log in to the container "

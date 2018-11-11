#!/bin/bash
docker build -t charsi/uod .

docker rm -f uod

echo "NOTICE: Starting app.. Try http://localhost:8000/ in a couple of seconds"
echo "NOTICE: Ctrl + p + q to detach"
echo "NOTICE: \"docker attach uod\" to attach"

# 127.0.0.1 forces the app to be accesible from localhost only
# remove it to make the app publically accesible without using a reverse proxy (like nginx)
docker run --name "uod" -ti --rm -v $PWD/public:/src/public -p 127.0.0.1:8000:8000 charsi/uod

# being called from Dockerfile --
# docker exec uod npm run gulp start-live
# docker ps


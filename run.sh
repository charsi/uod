# /bin/bash

# 
docker build -t charsi/uod .
docker run -d -t -i -v /home/nishil/projects/uod/:/usr/src/app -p 80:3000 charsi/uod /bin/bash
docker ps
echo "run <docker exec -it YOUR-CONTAINER-ID /bin/bash>" to log into the container

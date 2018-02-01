npm install
docker build . --name charsi/uod
docker network create dockernet
./run.sh
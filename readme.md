npm install
docker build . --name charsi/uod
docker network create dockernet
cp .env.sample .env
(add your api keys to .env)
./run.sh
docker stop docker-nginx;
docker rm docker-nginx;
docker run \
	--name "docker-nginx" \
	-p 80:80 \
	-v $(pwd)/public/:/var/www \
	-v $(pwd)/nginx.conf:/etc/nginx/nginx.conf \
	--net dockernet \
	nginx;
docker ps;

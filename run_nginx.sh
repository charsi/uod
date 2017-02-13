docker stop docker-nginx;
docker rm docker-nginx;
docker run \
	-d \
	--name "docker-nginx" \
	-p 80:80 \
	-v $(pwd)/public/:/var/www \
	-v $(pwd)/nginx.conf:/etc/nginx/nginx.conf \
	--link uod:charsi/uod \
	nginx;
docker ps;

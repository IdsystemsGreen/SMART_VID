# nginxAWS
Configuracion NGINX. Agregar los 2 archivos al path del proyecto:

Dockerfile: configuracion de la imagen de docker
nginx.conf: configuracion del servidor Nginx


## Generar imagen

docker build -t docker-nginx .

## Run DOCKER

docker run --name web --rm  -p 8080:80 docker-nginx

## Repositorio https://hub.docker.com/

docker push lsoria88/docker-nginx:tagname

Ej: docker push lsoria88/docker-nginx:latest


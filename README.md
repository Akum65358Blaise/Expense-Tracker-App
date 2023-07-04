# Expense Tracker App With React.JS!

Build Expense Tracker App Using React.JS + ES6 & React Hooks...... React (Javascript Most Famous Framework)......

# Build docker image

docker build -t your-image-name .

# Run the docker container

docker run -p 3000:3000 your-image-name

# List all Docker images on your system:

docker images

# Remove docker image

docker rmi image-id

# List all running containers

docker ps

# List all containers (including stopped ones)

docker ps -a

# Remove a container

docker rm container-id

# Get logs from a docker container

docker logs container-id

# Pushing the image to Docker Hub

docker tag 91d9c76e6686 akumblaise/my-expense-tracker:v1

# Push docker image to dockerhub
docker push akumblaise/my-expense-tracker:v1

# Pull docker image from dockerhub
docker pull akumblaise/my-expense-tracker:v1
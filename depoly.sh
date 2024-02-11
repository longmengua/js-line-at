git pull

docker build -t image-line-at .

docker run -p 80:3000 -d --name container-line-at image-line-at

# docker system prune -af
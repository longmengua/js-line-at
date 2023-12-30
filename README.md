# js-line-at

- docker build -t image-line-at .
- docker run -p 80:5000 -d --name container-line-at image-line-at
- clean unused image, container, volume
  - docker system prune -af

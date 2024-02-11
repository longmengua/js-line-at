# js-line-at

- docker build -t image-line-at .
- docker run -p 80:3000 -d --name line-at line-at
- clean unused image, container, volume
  - docker system prune -af

## doc

- webhook api doc
  - https://developers.line.biz/en/reference/messaging-api/
- message api
  - https://developers.line.biz/en/docs/messaging-api/message-types/#text-messages
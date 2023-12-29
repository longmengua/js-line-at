import { LineAtClass } from "./util/line-at";

(async () => {
  const lineAtClass = new LineAtClass({
    channelAccessToken: "S3jREon0tWiSYe+lw3LqVJmlB7Cgj1udFqZuxvFOT9nuXzWT8i8NofJaX37FGnsQZpMGYjb+5G8EbaB/Bg2dVfUWwEoWkEHIWOmGW3Rcwawr50gofpqMy/7HTg6MwaGlicxg+OG6E5cDfofJG2BVCAdB04t89/1O/w1cDnyilFU="
  })

  const userId = ''

  // Photo message
  const photoMessage = {
    to: userId,
    messages: [
      {
        type: 'image',
        originalContentUrl: 'https://example.com/original.jpg',
        previewImageUrl: 'https://example.com/preview.jpg',
      },
    ],
  };

  // Rich message
  const richMessage = {
    to: userId,
    messages: [
      {
        type: 'flex',
        altText: 'This is a rich message',
        contents: {
          type: 'bubble',
          body: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'Hello, this is a rich message!',
              },
            ],
          },
        },
      },
    ],
  };

  // Card-based message
  const cardMessage = {
    to: userId,
    messages: [
      {
        type: 'template',
        altText: 'This is a card-based message',
        template: {
          type: 'buttons',
          thumbnailImageUrl: 'https://example.com/image.jpg',
          title: 'Card Title',
          text: 'Card Description',
          actions: [
            {
              type: 'message',
              label: 'Action 1',
              text: 'Action 1 clicked!',
            },
            {
              type: 'uri',
              label: 'Visit Website',
              uri: 'https://example.com',
            },
          ],
        },
      },
    ],
  };

  // Text message
  const textMessage = {
    to: userId,
    messages: [
      {
        type: 'text',
        text: 'Hello, this is a text message!',
      },
    ],
  };

  // photo message 圖片訊息
  lineAtClass.sendMessage([
    textMessage, 
    photoMessage, 
    richMessage, 
    cardMessage,
  ])

})()

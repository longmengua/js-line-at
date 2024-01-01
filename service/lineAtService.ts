import { LineAtClass } from "../util/line-at";

// user
const userId = "U9e0e41ffdaa2917f3f20aa223a337a96";

// token
const channelAccessToken = "S3jREon0tWiSYe+lw3LqVJmlB7Cgj1udFqZuxvFOT9nuXzWT8i8NofJaX37FGnsQZpMGYjb+5G8EbaB/Bg2dVfUWwEoWkEHIWOmGW3Rcwawr50gofpqMy/7HTg6MwaGlicxg+OG6E5cDfofJG2BVCAdB04t89/1O/w1cDnyilFU=";

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
      text: 'Hello, world3',
    },
    {
      type: 'text',
      text: 'Hello, world4',
    },
  ],
};

export const LineAtService = async() => {
  const lineAtClass = new LineAtClass({
    channelAccessToken
  });
  
  lineAtClass.sendMessage([
    textMessage,
    photoMessage,
    richMessage,
    cardMessage,
  ]);
}
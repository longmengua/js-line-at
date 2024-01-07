import { LineAtClass } from "../util/line-at";

// user
const userId = "U9e0e41ffdaa2917f3f20aa223a337a96";

// token
const channelAccessToken = "S3jREon0tWiSYe+lw3LqVJmlB7Cgj1udFqZuxvFOT9nuXzWT8i8NofJaX37FGnsQZpMGYjb+5G8EbaB/Bg2dVfUWwEoWkEHIWOmGW3Rcwawr50gofpqMy/7HTg6MwaGlicxg+OG6E5cDfofJG2BVCAdB04t89/1O/w1cDnyilFU=";

// Photo message
const photoMessage = {
  type: 'image',
  originalContentUrl: 'https://obs.line-scdn.net/hQE2KGTU8DmoXMnhMdgQcVjRxTgh5A0tUMSdCX0xZFyZ9YQtCQT8KbUxzFiVQaUhdWigdWU8zGTJ9fQtvVQEGXmFCGwp-UA9Hbw5JcFo/300',
  previewImageUrl: 'https://obs.line-scdn.net/hQE2KGTU8DmoXMnhMdgQcVjRxTgh5A0tUMSdCX0xZFyZ9YQtCQT8KbUxzFiVQaUhdWigdWU8zGTJ9fQtvVQEGXmFCGwp-UA9Hbw5JcFo/300',
};

// Rich message
const richMessage = {
  "type": "imagemap",
  "baseUrl": "https://obs.line-scdn.net/hQE2KGTU8DmoXMnhMdgQcVjRxTgh5A0tUMSdCX0xZFyZ9YQtCQT8KbUxzFiVQaUhdWigdWU8zGTJ9fQtvVQEGXmFCGwp-UA9Hbw5JcFo/300",
  "altText": "This is an imagemap",
  "baseSize": {
    "width": 1040,
    "height": 1040
  },
  "actions": [
    {
      "type": "uri",
      "linkUri": "https://obs.line-scdn.net/hQE2KGTU8DmoXMnhMdgQcVjRxTgh5A0tUMSdCX0xZFyZ9YQtCQT8KbUxzFiVQaUhdWigdWU8zGTJ9fQtvVQEGXmFCGwp-UA9Hbw5JcFo/300",
      "area": {
        "x": 0,
        "y": 0,
        "width": 520,
        "height": 1040
      }
    },
    {
      "type": "message",
      "text": "Hello",
      "area": {
        "x": 520,
        "y": 0,
        "width": 520,
        "height": 1040
      }
    }
  ]
};

const flexBubbleMessage = {
  "type": "flex",
  "altText": "This is a Flex Message",
  "contents": {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "image",
          "url": "https://obs.line-scdn.net/hQE2KGTU8DmoXMnhMdgQcVjRxTgh5A0tUMSdCX0xZFyZ9YQtCQT8KbUxzFiVQaUhdWigdWU8zGTJ9fQtvVQEGXmFCGwp-UA9Hbw5JcFo/300",
          "size": "full",
          "aspectRatio": "16:9"
        },
        {
          "type": "button",
          "style": "primary",
          "action": {
            "type": "uri",
            "label": "Open Link",
            "uri": "https://obs.line-scdn.net/hQE2KGTU8DmoXMnhMdgQcVjRxTgh5A0tUMSdCX0xZFyZ9YQtCQT8KbUxzFiVQaUhdWigdWU8zGTJ9fQtvVQEGXmFCGwp-UA9Hbw5JcFo/300"
          }
        },
        {
          "type": "separator",
          "margin": "md"
        }
      ]
    }
  }
};

const flexCarouselMessage = {
  "type": "flex",
  "altText": "This is a Flex Message",
  "contents": {
    "type": "carousel",
    "contents": [
      {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "image",
              "url": "https://obs.line-scdn.net/hQE2KGTU8DmoXMnhMdgQcVjRxTgh5A0tUMSdCX0xZFyZ9YQtCQT8KbUxzFiVQaUhdWigdWU8zGTJ9fQtvVQEGXmFCGwp-UA9Hbw5JcFo/300",
              "size": "full",
            },
            {
              "type": "separator",
              "margin": "lg"
            },
            {
              "margin": "lg",
              "type": "text",
              "text": "Hello, World!",
              "color": "#8CA6F9",
              "align": "center",
              "action": {
                "type": "uri",
                "label": "Buy",
                "uri": "https://obs.line-scdn.net/hQE2KGTU8DmoXMnhMdgQcVjRxTgh5A0tUMSdCX0xZFyZ9YQtCQT8KbUxzFiVQaUhdWigdWU8zGTJ9fQtvVQEGXmFCGwp-UA9Hbw5JcFo/300"
              }
            },
          ]
        }
      },
      {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "image",
              "url": "https://obs.line-scdn.net/hQE2KGTU8DmoXMnhMdgQcVjRxTgh5A0tUMSdCX0xZFyZ9YQtCQT8KbUxzFiVQaUhdWigdWU8zGTJ9fQtvVQEGXmFCGwp-UA9Hbw5JcFo/300",
              "size": "full",
            },
            {
              "type": "separator",
              "margin": "lg"
            },
            // 每新增一個動作標籤，就新增一個這樣物件
            {
              "margin": "lg",
              "type": "text",
              "text": "Hello, World!",
              "color": "#8CA6F9",
              "align": "center",
              "action": {
                "type": "uri",
                "label": "Buy",
                "uri": "https://obs.line-scdn.net/hQE2KGTU8DmoXMnhMdgQcVjRxTgh5A0tUMSdCX0xZFyZ9YQtCQT8KbUxzFiVQaUhdWigdWU8zGTJ9fQtvVQEGXmFCGwp-UA9Hbw5JcFo/300"
              }
            },
            {
              "margin": "lg",
              "type": "text",
              "text": "Hello, World!",
              "color": "#8CA6F9",
              "align": "center",
              "action": {
                "type": "uri",
                "label": "Buy",
                "uri": "https://obs.line-scdn.net/hQE2KGTU8DmoXMnhMdgQcVjRxTgh5A0tUMSdCX0xZFyZ9YQtCQT8KbUxzFiVQaUhdWigdWU8zGTJ9fQtvVQEGXmFCGwp-UA9Hbw5JcFo/300"
              }
            },
          ]
        }
      },
    ]
  }
};

// Card-based message
const cardMessage = {
  type: 'template',
  altText: 'This is a card-based message',
  template: {
    type: 'buttons',
    thumbnailImageUrl: 'https://obs.line-scdn.net/hQE2KGTU8DmoXMnhMdgQcVjRxTgh5A0tUMSdCX0xZFyZ9YQtCQT8KbUxzFiVQaUhdWigdWU8zGTJ9fQtvVQEGXmFCGwp-UA9Hbw5JcFo/300',
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
        uri: 'https://obs.line-scdn.net/hQE2KGTU8DmoXMnhMdgQcVjRxTgh5A0tUMSdCX0xZFyZ9YQtCQT8KbUxzFiVQaUhdWigdWU8zGTJ9fQtvVQEGXmFCGwp-UA9Hbw5JcFo/300',
      },
    ],
  },
};

// Text message
const textMessage = {
  type: 'text',
  text: 'Hello, world',
};

export const LineAtService = async() => {
  const lineAtClass = new LineAtClass({
    channelAccessToken
  });
  
  lineAtClass.sendMessage([
    {
      to: userId,
      messages: [
        // textMessage,
        // photoMessage,
        // richMessage,
        // cardMessage,
        // flexBubbleMessage,
        flexCarouselMessage
      ]
    }
  ]);
}
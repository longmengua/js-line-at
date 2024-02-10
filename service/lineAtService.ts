import { LineAtClass } from "../util/line-at";

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
              "margin": "lg",
              "type": "text",
              "text": "標題",
            },
            {
              "margin": "md",
              "type": "text",
              "text": "說明..............................",
              "color": "#A5A5A5",
            },
            {
              "type": "separator",
              "margin": "lg"
            },
            // 動作標籤，複製下面object
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
              "margin": "lg",
              "type": "text",
              "text": "標題",
            },
            {
              "margin": "md",
              "type": "text",
              "text": "說明..............................",
              "color": "#A5A5A5",
            },
            {
              "type": "separator",
              "margin": "lg"
            },
            // 動作標籤，複製下面object
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
  text: `${new Date().toISOString()}\nWelcome to Waltor channel, feel free to say anything you like !!`,
};

export const LineAtService = async(userId: string) => {
  const lineAtClass = new LineAtClass({
    channelAccessToken
  });
  
  lineAtClass.sendMessage([
    {
      to: userId,
      messages: [
        textMessage,
        // photoMessage,
        // richMessage,
        // cardMessage,
        // flexBubbleMessage,
        // flexCarouselMessage
      ]
    }
  ]);
}
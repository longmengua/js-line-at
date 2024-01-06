curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer S3jREon0tWiSYe+lw3LqVJmlB7Cgj1udFqZuxvFOT9nuXzWT8i8NofJaX37FGnsQZpMGYjb+5G8EbaB/Bg2dVfUWwEoWkEHIWOmGW3Rcwawr50gofpqMy/7HTg6MwaGlicxg+OG6E5cDfofJG2BVCAdB04t89/1O/w1cDnyilFU=' \
-d '{
  "to": "U9e0e41ffdaa2917f3f20aa223a337a96",
  "messages": [
    {
      "type": "imagemap",
      "baseUrl": "https://obs.line-scdn.net/hQE2KGTU8DmoXMnhMdgQcVjRxTgh5A0tUMSdCX0xZFyZ9YQtCQT8KbUxzFiVQaUhdWigdWU8zGTJ9fQtvVQEGXmFCGwp-UA9Hbw5JcFo",
      "altText": "This is an imagemap",
      "baseSize": {
        "width": 1040,
        "height": 1040
      },
      "actions": [
        {
          "type": "message",
          "text": "Hello",
          "area": {
            "x": 0,
            "y": 0,
            "width": 1040,
            "height": 1040
          }
        }
      ]
    }
  ]
}'

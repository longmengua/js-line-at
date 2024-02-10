import { version } from './package.json'
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { LineAtService } from './service/lineAtService';

const app = express();
const port = 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

app.get('/', async (req: Request, res: Response) => {
  res.send({
    version
  });
});

interface LineEvent {
  type: string;
  unfollow?: any;
  postback?: {
    data?: string;
    params?: {
      datetime?: string; // this will cause problem while in different time zone
    }
  }; 
  beacon?: {
    hwid?: string;
    type?: string;
  };  
  message?: {
    type?: string;
    id?: string;
    quoteToken?: string;
    stickerId?: string;
    packageId?: string;
    stickerResourceType?: string;
    keywords?: string[];
    text?: string;
    title?: string;
    address?: string;
    latitude?: number;
    longitude?: number;
    fileName?: string;
    fileSize?: number;
    duration?: number;
    contentProvider?: {
      type?: string;
      originalContentUrl?: string;
      previewImageUrl?: string;
    };
    imageSet?: {
      id?: string;
      index?: number;
      totla?: number;
    };
    emojis?: Array<{
      index?: number
      length?: number
      productId?: string
      emojiId?: string
    }>;
    mention?: {
      mentionees?: Array<{
        index: number
        length: number
        type: string
        userId?: string
      }>
    }
  };
  replyToken?: string;
  mode?: string;
  timestamp?: number;
  source?: {
    type?: string;
    userId?: string;
    groupId?: string;
  };
  webhookEventId?: string;
  deliveryContext?: {
    isRedelivery?: string;
  };
  follow?: {
    isUnblocked?: boolean;
  };
  unsend?: {
    messageId?: string;
  }
}

app.post('/webhook', (req, res) => {
  const events = req.body.events;

  events.forEach((event: LineEvent) => {
    console.log(JSON.stringify(event))
    switch (event.type) {
      case 'message':
        // Handle message event
        break;
      case 'follow':
        // Handle follow event
        break;
      case 'unfollow':
        // Handle unfollow event
        break;
      case 'join':
        // Handle join event
        break;
      case 'leave':
        // Handle leave event
        break;
      case 'memberJoined':
        // Handle memberJoined event
        break;
      case 'memberLeft':
        // Handle memberLeft event
        break;
      case 'postback':
        // Handle postback event
        break;
      case 'beacon':
        // Handle beacon event
        break;
      default:
        break;
    }
  });
});

app.get('/send-msg', async (req: Request, res: Response) => {
  const userId: string = req?.query?.userId as string ?? '@all';
  await LineAtService(userId)
  res.send("ok");
});

app.use((err: any, req: Request, res: Response, next: any) => {
  // Set a default status code
  let statusCode = 500;

  // Customize status code based on the error type
  if (err.status === 400 && 'body' in err) {
    statusCode = 400; // Bad Request (e.g., JSON parsing error)
  }

  res?.status(statusCode)?.json({
    status: 'Error',
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

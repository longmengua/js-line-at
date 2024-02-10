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
    switch (event.type) {
      case 'message':
        // Handle message event
        res.sendStatus(200).json({ code: '200001', data: event?.message, error: null, message: 'Message received' });
        break;
      case 'follow':
        // Handle follow event
        res.sendStatus(200).json({ code: '200002', data: { userId: event?.source?.userId }, error: null, message: 'User added you as a friend' });
        break;
      case 'unfollow':
        // Handle unfollow event
        res.sendStatus(200).json({ code: '200003', data: { userId: event?.source?.userId }, error: null, message: 'User removed you as a friend' });
        break;
      case 'join':
        // Handle join event
        res.sendStatus(200).json({ code: '200004', data: { userId: event?.source?.userId }, error: null, message: 'User joined a group or added you as a friend in a multi-person chat' });
        break;
      case 'leave':
        // Handle leave event
        res.sendStatus(200).json({ code: '200005', data: { userId: event?.source?.userId }, error: null, message: 'User left a group' });
        break;
      case 'memberJoined':
        // Handle memberJoined event
        res.sendStatus(200).json({ code: '200006', data: { userId: event?.source?.userId }, error: null, message: 'User joined a group' });
        break;
      case 'memberLeft':
        // Handle memberLeft event
        res.sendStatus(200).json({ code: '200006', data: { userId: event?.source?.userId }, error: null, message: 'User left a group' });
        break;
      case 'postback':
        // Handle postback event
        res.sendStatus(200).json({ code: '200007', data: { userId: event?.source?.userId }, error: null, message: 'Postback action received' });
        break;
      case 'beacon':
        // Handle beacon event
        res.sendStatus(200).json({ code: '200008', data: { userId: event?.source?.userId }, error: null, message: 'User entered the range of a beacon' });
        break;
      default:
        res.sendStatus(200).json({ code: '200999', data: { userId: event?.source?.userId }, error: null, message: `Unhandled event type: ${event.type}` });
    }
  });
});

app.get('/demo', async (req: Request, res: Response) => {
  await LineAtService()
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

import { version } from './package.json'
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { LineAtService } from './service/lineAtService';

const app = express();
const port = 5000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

app.get('/', async (req: Request, res: Response) => {
  res.send({
    version
  });
});

interface LineEvent {
  type: string;
  // Define other properties based on the event types
  message?: any;
  follow?: any;
  unfollow?: any;
  // Define properties for other event types
}

app.post('/webhook', (req, res) => {
  const events = req.body.events;
  events.forEach((event: LineEvent) => {
    switch (event.type) {
      case 'message':
        // Handle message event
        console.log('Message received:', event.message);
        break;
      case 'follow':
        // Handle follow event
        console.log('User added you as a friend');
        break;
      case 'unfollow':
        // Handle unfollow event
        console.log('User removed you as a friend');
        break;
      case 'join':
        // Handle join event
        console.log('User joined a group or added you as a friend in a multi-person chat');
        break;
      case 'leave':
        // Handle leave event
        console.log('User left a group');
        break;
      case 'memberJoined':
        // Handle memberJoined event
        console.log('User joined a group');
        break;
      case 'memberLeft':
        // Handle memberLeft event
        console.log('User left a group');
        break;
      case 'postback':
        // Handle postback event
        console.log('Postback action received:', event.postback);
        break;
      case 'beacon':
        // Handle beacon event
        console.log('User entered the range of a beacon:', event.beacon);
        break;
      default:
        console.log('Unknown event type:', event.type);
    }
  });

  res.sendStatus(200).json({ code: '200', data: 'ok', error: null, message: null });
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

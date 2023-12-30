import { version } from './package.json'
import express from 'express';
import bodyParser from 'body-parser';
import { LineAtService } from './service/lineAtService';

const app = express();
const port = 5000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.send({
    version
  });
});

app.post('/webhook', async (req, res) => {
  // Extract the message from the request body
  const { message } = req.body;

  // Process the message (you can replace this with your own logic)
  console.log('Received message:', JSON.stringify(req?.body));

  // Send a response back to the sender (optional)
  res.json({ status: 'Message received successfully', message });
});

app.post('/demo', async (_req, res) => {
  await LineAtService()
  res.send("ok");
});

app.use((err: any, _req, res: any) => {
  console.error('Error:', err);

  // Set a default status code
  let statusCode = 500;

  // Customize status code based on the error type
  if (err.status === 400 && 'body' in err) {
    statusCode = 400; // Bad Request (e.g., JSON parsing error)
  }

  res.status(statusCode).json({
    status: 'Error',
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

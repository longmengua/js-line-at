import { version } from './package.json'
import express from 'express';
import bodyParser from 'body-parser';
import { LineAtService } from './service/lineAtService';

const app = express();
const port = 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({
    version
  });
});

app.post('/webhook', async (req, res) => {
  // Extract the message from the request body
  const { message } = req.body;

  // Process the message (you can replace this with your own logic)
  console.log('Received message:', message);

  // Send a response back to the sender (optional)
  res.json({ status: 'Message received successfully', message });
});

app.post('/demo', async (req, res) => {
  await LineAtService()
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

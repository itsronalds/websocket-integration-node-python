// Activate environment variables
require('dotenv').config();

// Import the necessary modules
const http = require('http');
const WebSocket = require('ws');
const models = require('./models');

const server = http.createServer((req, res) => {
  // Endpoint to create an invoice
  if (req.method === 'POST' && req.url === '/api/send-invoice') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      const data = JSON.parse(body);

      if (!data.clientName || !data.amount || !data.status) {
        res.writeHead(400, { 'Content-Type': 'applications/json' });
        res.end(JSON.stringify({ message: 'Fields are required' }));
        return;
      }

      const result = await models.createInvoice(data.clientName, data.amount, data.status);

      if (!result) {
        res.writeHead(500, { 'Content-Type': 'applications/json' });
        res.end(JSON.stringify({ message: 'Internal Server Error' }));
        return;
      }

      const invoice = await models.getLastInvoice();

      if (!invoice) {
        res.writeHead(500, { 'Content-Type': 'applications/json' });
        res.end(JSON.stringify({ message: 'Internal Server Error' }));
        return;
      }

      wss.clients.forEach((client) => {
        client.send(JSON.stringify(invoice));
      });

      res.writeHead(200, { 'Content-Type': 'applications/json' });
      res.end(JSON.stringify({ message: 'Invoice created' }));
    });
  }
  // Endpoint to update an invoice
  else if (req.method === 'POST' && req.url === '/api/notify-invoice') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      const data = JSON.parse(body);

      if (!data.invoiceID) {
        res.writeHead(400, { 'Content-Type': 'applications/json' });
        res.end(JSON.stringify({ message: 'Fields are required' }));
        return;
      }

      const result = await models.invoiceProcessed(data.invoiceID);

      if (!result) {
        res.writeHead(500, { 'Content-Type': 'applications/json' });
        res.end(JSON.stringify({ message: 'Internal Server Error' }));
        return;
      }

      res.writeHead(200, { 'Content-Type': 'applications/json' });
      res.end(JSON.stringify({ message: 'Invoice processed' }));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'applications/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
});

server.listen(process.env.PORT || 8000, () => {
  console.log(`Server started on port ${server.address().port}`);
});

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());
app.use(bodyParser.json());

// Mock data
let products = [
  { id: 1, name: 'T-shirt', price: 999, image: '/images/tshirt.png' },
  { id: 2, name: 'Sneakers', price: 2999, image: '/images/sneakers.png' }
];

// Routes
app.get('/api/products', (req, res) => res.json(products));
app.post('/api/orders', (req, res) => {
  console.log('Order received:', req.body);
  res.json({ status: 'success' });
});

// WebSocket example
io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('send-tag', (tag) => {
    io.emit('new-tag', tag);
  });
});

server.listen(4000, () => console.log('Server running on http://localhost:4000'));

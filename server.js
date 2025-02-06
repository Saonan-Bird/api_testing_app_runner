const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Demo endpoint 1: Get a list of products
app.get('/api/v1/products', (req, res) => {
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Smartphone', price: 699 }
  ];
  res.json(products);
});

// Demo endpoint 2: Get user details by ID
app.get('/api/v1/users/:id', (req, res) => {
  const { id } = req.params;
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
});

// Demo endpoint 3: Get current server status
app.get('/api/v1/status', (req, res) => {
  const status = {
    server: 'running',
    uptime: process.uptime(),
    timestamp: new Date()
  };
  res.json(status);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


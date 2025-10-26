const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: '🎉 Deemas Fashion API is running!',
    status: 'SUCCESS', 
    timestamp: new Date().toISOString()
  });
});

// Test products route
app.get('/api/products/similar', (req, res) => {
  const { title } = req.query;
  res.json({
    success: true,
    products: [
      { id: 1, title: `Similar to ${title}`, price: 49.99 },
      { id: 2, title: `Fashion ${title}`, price: 39.99 }
    ]
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
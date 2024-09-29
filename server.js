const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory data store (can be replaced with a database like MongoDB)
let orders = [];
let responses = [];

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../')));

// Route to handle order submission
app.post('/submit-order', (req, res) => {
    const { order } = req.body;
    if (order) {
        orders.push(order);
        res.status(200).json({ message: 'Order received successfully.' });
    } else {
        res.status(400).json({ message: 'Invalid order data.' });
    }
});

// Route to handle yes/no response
app.post('/submit-response', (req, res) => {
    const { response } = req.body;
    if (response === 'yes' || response === 'no') {
        responses.push(response);
        res.status(200).json({ message: 'Response recorded successfully.' });
    } else {
        res.status(400).json({ message: 'Invalid response.' });
    }
});

// Admin route to view all orders and responses
app.get('/admin', (req, res) => {
    const data = {
        orders,
        responses
    };
    res.status(200).json(data);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

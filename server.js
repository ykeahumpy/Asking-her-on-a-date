const fs = require('fs');
const path = require('path');

// Load existing data from JSON file
let orders = [];
let responses = [];

const loadData = () => {
    if (fs.existsSync('data.json')) {
        const rawData = fs.readFileSync('data.json');
        const data = JSON.parse(rawData);
        orders = data.orders || [];
        responses = data.responses || [];
    }
};

// Save data to JSON file
const saveData = () => {
    const data = { orders, responses };
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
};

// Load data initially
loadData();

// Handle order submission
app.post('/submit-order', (req, res) => {
    const { order } = req.body;
    if (order) {
        orders.push(order);
        saveData();  // Save data after each order
        res.status(200).json({ message: 'Order received successfully.' });
    } else {
        res.status(400).json({ message: 'Invalid order data.' });
    }
});

// Handle yes/no response
app.post('/submit-response', (req, res) => {
    const { response } = req.body;
    if (response === 'yes' || response === 'no') {
        responses.push(response);
        saveData();  // Save data after each response
        res.status(200).json({ message: 'Response recorded successfully.' });
    } else {
        res.status(400).json({ message: 'Invalid response.' });
    }
});

// Admin route to view all orders and responses
app.get('/admin', (req, res) => {
    const data = { orders, responses };
    res.status(200).json(data);
});

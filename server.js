const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Store selections
let selections = [];

app.post('/menu-selection', (req, res) => {
    selections.push(req.body);
    res.status(200).send('Selection received!');
});

app.get('/menu-selections', (req, res) => {
    res.json(selections);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

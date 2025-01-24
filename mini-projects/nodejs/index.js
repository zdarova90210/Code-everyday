const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Main page route
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/user', userRoutes);

app.post('/data', (req, res) => {
    res.json({message: 'Data received', data: req.body});
});


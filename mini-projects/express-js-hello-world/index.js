const express = require('express');
const app = express();

// Separate file with only user routes
const userRoutes = require('./routes/userRoutes');

// JSON middleware (allow to get json data in req.body)
app.use(express.json());

// Logs
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Main page route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// User routes
app.use('/user', userRoutes);

// Handle post request
app.post('/data', (req, res) => {
    res.json({message: 'Data received', data: req.body});
});

// Start server at localhost:3000
app.listen(3000, () => {
    console.log('Server started at localhost:3000');
});
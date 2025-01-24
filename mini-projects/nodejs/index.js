const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');

app.use(express.json());

// Main page route
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/user', userRoutes);

app.post('/data', (req, res) => {
    res.json({message: 'Data received', data: req.body});
})

app.use((req) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
})

// Start server at localhost:3000
app.listen(3000, () => {
    console.log('Server started at localhost:3000');
})
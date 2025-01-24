const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
    res.send('User profile 🙀');
});

router.post('/profile', (req, res) => {
    res.json({message: 'User profile updated', data: req.body});
});

module.exports = router;
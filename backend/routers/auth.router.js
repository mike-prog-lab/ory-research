const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
    return res.send('login!')
})

module.exports = router;

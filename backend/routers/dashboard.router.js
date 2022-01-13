const express = require('express');
const router = express.Router();

router.get('', async (req, res) => {
    return res.json({
        user: {
            id: req.headers['x-user'],
        },
        meta: {
            headers: req.headers
        }
    });
})

module.exports = router;

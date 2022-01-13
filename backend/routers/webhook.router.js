const express = require('express');
const util = require("util");
const router = express.Router();

router.post('/', async (req, res) => {
    console.log(util.inspect(req.body, {showHidden: false, depth: null, colors: true}))
    return res.send('ok');
})

module.exports = router;

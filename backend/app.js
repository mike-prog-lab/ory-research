const express = require('express');
const util = require('util');

const app = express();
const PORT = 3355;

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

app.post('/webhook', async (req, res) => {
    console.log(util.inspect(req.body, {showHidden: false, depth: null, colors: true}))
    return res.send('ok');
})

app.get('/login', (req, res) => {
    return res.send('login');
})

app.use(async (req, res, next) => {
    console.log(req);
    next()
})

app.get('/dashboard', (req, res) => {
    return res.send('dashboard');
})
app.get('/verify', (req, res) => {
    return res.send('verify');
})

app.listen(PORT, (err) => {
    if (err) {
        throw err;
    }

    console.log(`App started on port ${PORT}`);
})
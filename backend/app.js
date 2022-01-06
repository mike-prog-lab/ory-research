const express = require('express');

const app = express();
const PORT = 3355;

app.get('/dashboard', (req, res) => {
    return res.send('dashboard');
})
app.get('/login', (req, res) => {
    return res.send('login');
})
app.get('/registration', (req, res) => {
    return res.send('registration');
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
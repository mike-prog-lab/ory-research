const express = require('express');

const app = express();
const PORT = 3355;

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())
app.use(async (req, res, next) => {
    console.log(req);
    next()
})

app.use('/auth', require('./routers/auth.router'))
app.use('/dashboard', require('./routers/dashboard.router'))
app.use('/webhook', require('./routers/webhook.router'))

app.use(async (req, res) => {
    return res.status(404).send('not found');
})

app.listen(PORT, (err) => {
    if (err) {
        throw err;
    }

    console.log(`App started on port ${PORT}`);
})
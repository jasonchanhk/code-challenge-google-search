const express = require('express')
const cors = require('cors');

const app = express()
app.use(express.json())
app.use(cors());

const searchRouter = require('./controllers/search')
app.use('/search', searchRouter);

app.get('/', (req, res) => {
    res.send('Hello there!');
});

module.exports = app;

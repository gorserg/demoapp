var express = require('express');
var app = express();

const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/api/ping', function (req, res) {
    res.json({ "ping": new Date().toISOString() });
});

app.listen(port,  function () {
    console.log(`Express server running at http://localhost:${port}/`);
});

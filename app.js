var express = require('express');
var app = express();

var tracks = require('./data/tracks')

const port = process.env.PORT || 8080;

app.use('/', express.static('public'));

app.get('/api/tracks', function (req, res) {
    res.json(tracks);
});

app.get('/api/ping', function (req, res) {
    res.json({ "ping": new Date().toISOString() });
});

app.listen(port,  function () {
    console.log(`Express server running at http://localhost:${port}/`);
});

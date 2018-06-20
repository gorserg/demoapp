var express = require('express');
var app = express();
var mongoose = require('mongoose');

var tracks = require('./data/tracks')

const port = process.env.PORT || 8080;

// Connect mLab MongoDB
mongoose.connect('mongodb://admin:qwerty123@ds261040.mlab.com:61040/danit');

const Track = mongoose.model('Track', {
    id: {
        type: Number,
        index: true,
        unique: true
    }, name: String
});

//const track = new Track({id: 3, name: 'Track 3'});
//track.save().then(() => console.log('saved'));

// Create our Express router
var router = express.Router();

app.get('/api/track', function (req, res) {
    Track.find(function(err, tracks) {
        if (err)
            res.send(err);

        res.json(tracks);
    });
});

app.use('/', express.static('public'));

app.get('/api/tracks', function (req, res) {
    res.json(tracks);
});

app.get('/api/ping', function (req, res) {
    res.json({"ping": new Date().toISOString()});
});

app.listen(port, function () {
    console.log(`Express server running at http://localhost:${port}/`);
});

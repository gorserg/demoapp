var express = require('express'),
    router = express.Router(),
    tracks = require('../data/tracks'),
    version = require('../package.json').version;

// mongoose models
var Track = require('../models/track');

router.get('/version', function (req, res) {
    res.json({"version": version});
});

router.get('/ping', function (req, res) {
    res.json({"date": new Date().toISOString()});
});

router.get('/file/tracks', function (req, res) {
    res.json(tracks);
});

router.route('/track')
    .get(function (req, res) {
        Track.find(function (err, tracks) {
            if (err)
                res.send(err);

            res.json(tracks);
        });
    });

module.exports = router;

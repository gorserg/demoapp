var express = require('express');
var app = express();
var mongoose = require('mongoose');
var apiRoutes = require('./routes/api')

const port = process.env.PORT || 8080;




// Create our Express router
var router = express.Router();

router.use(express.static('public'));

app.use('/', router);
app.use('/api/', apiRoutes);


// Connect mLab MongoDB
mongoose.connect('mongodb://admin:qwerty123@ds261040.mlab.com:61040/danit');

//const track = new Track({id: 5, name: 'Track 5'});
//track.save().then(() => console.log('saved'));





app.listen(port, function () {
    console.log(`Server running at http://localhost:${port}/`);
    console.log(router.stack);
});

var mongoose = require('mongoose');

// Define our track schema
var TrackSchema = new mongoose.Schema({
    id: {
        type: Number,
        index: true,
        unique: true
    }, name: String
});

// Export the Mongoose model
module.exports = mongoose.model('Track', TrackSchema);
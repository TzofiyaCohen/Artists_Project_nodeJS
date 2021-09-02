const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const songSchema = new Schema({
    name: { type: String },
    creator: { type: String }
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
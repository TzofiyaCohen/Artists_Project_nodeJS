const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const artistSchema = new Schema({
  artist_name: { type: String, required: true },
  artist_id: { type: String, required: true },
  birth: { type: Date, required: true },
  image: { type: String, required: true },
  songs: [{
    type: String
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Song'
  }]
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
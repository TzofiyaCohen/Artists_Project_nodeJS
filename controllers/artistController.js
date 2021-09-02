var Artist = require('../models/artist.model');

const addArtist = ((req, res) => {
    const { artist_id, artist_name, birth, image } = req.body;
    const songs = []

    const newArtist = new Artist({ artist_name, artist_id, birth, image, songs })
    newArtist.save()
        .then((response) => {
            console.log("artist added")
            res.json(response)
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

const addArtistSong = ((req, res) => {
    Artist.findOne({ artist_id: req.body.artist_id })
        .then(artist => {
            if (artist == null)
                res.json("Artist Not Exist")
            else {
                if (!artist.songs.includes(req.body.song)) {
                    artist.songs.push(req.body.song)
                    artist.save()
                        .then((response) => {
                            console.log("song added")
                            res.json(response)
                        })
                        .catch(err => res.status(400).json('Error: ' + err));
                }
                else {
                    console.log("Song already exist")
                    res.json("Song already exist")
                }
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

const getArtists = ((req, res) => {
    Artist.find()
        .then((artists) => {
            console.log(`${artists.length} artists`)
            res.json(artists)
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

const deleteArtistSong = ((req, res) => {
    let songs = []

    if (req.body.song == null)
        res.json("invalid songName")

    Artist.findOne({ artist_id: req.body.artist_id })
        .then((artist) => {
            if (artist == null)
                res.json("Artist Not Exist")
            if (req.body.song !== "ALL") {
                songs = artist.songs.filter(song => song !== req.body.song)
            }
            artist.songs = songs
            artist.save()
                .then(() => {
                    console.log(`song deleted ${req.body.song}`)
                    res.json(`song deleted ${req.body.song}`)
                })
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

const deleteArtist = ((req, res) => {
    Artist.findOneAndDelete({ artist_id: req.params.artist_id })
        .then((result) => {
            if (result == null)
                res.json("Artist Not Exist")
            else {
                console.log("artist deleted")
                res.json("artist deleted")
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = { addArtist, addArtistSong, getArtists, deleteArtistSong, deleteArtist }
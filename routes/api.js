const express = require('express')
const router = express.Router();
const { addArtist, addArtistSong, getArtists, deleteArtistSong, deleteArtist } = require('../controllers/artistController')

router.post('/addArtist', addArtist)
router.post('/addArtistSong', addArtistSong)
router.post('/deleteArtistSong', deleteArtistSong)
router.get('/getArtists', getArtists)
router.delete('/deleteArtist/:artist_id', deleteArtist)


module.exports = router;
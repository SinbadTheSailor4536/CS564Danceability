var express = require('express');
var Song = require('../models/song');

var songRouter = express.Router();

songRouter.get('/', (req, res) => {
  Song.retrieveAll((err, song) => {
    if (err)
      return res.json(err);
    return res.json(song);
  });
});

songRouter.get('/album/:albumTitle', function (req, res) {
    var albumTitle = req.params.albumTitle;
  
    Song.retrieveDancesOnAlbum(albumTitle, function (err, song){
        if (err)
            return res.json(err);
        return res.json(song);
    });
  });

songRouter.get('/top'), function (req, res) {
  
    Song.retrieveTop100Songs(function (err, song){
        if (err)
            return res.json(err);
        return res.json(song);
    });
};

songRouter.get('/:songTitle', function (req, res) {
    var songTitle = req.params.songTitle;

    Song.retrieveBySongName(songTitle, function (err, song){
        if (err)
            return res.json(err);
        return res.json(song);
    });
});

songRouter.get('/year/:year', function (req, res) {
    var year = req.params.year;

    Song.retrieveSongByYear(year, function (err, song){
        if (err)
            return res.json(err);
        return res.json(song);
    });
});

songRouter.get('/distinct/:songTitle', function (req, res) {
    var songTitle = req.params.songTitle;

    Song.retrieveDistinctSong(songTitle, function (err, song){
        if (err)
            return res.json(err);
        return res.json(song);
    });
});

module.exports = songRouter;
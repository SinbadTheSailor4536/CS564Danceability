var express = require('express');
var Album = require('../models/album');

var albumRouter = express.Router();

albumRouter.get('/:albumTitle', function (req, res) {
  var albumTitle = req.params.albumTitle;

  Album.retrieveDancesOnAlbum(albumTitle, function (err, album){
      if (err)
          return res.json(err);
      return res.json(album);
  });
});

module.exports = albumRouter;
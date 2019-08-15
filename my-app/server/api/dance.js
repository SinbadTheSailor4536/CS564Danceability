var express = require('express');
var Dance = require('../models/dance');

var router = express.Router();

router.get('/', (req, res) => {
  Dance.retrieveAll((err, dance) => {
    if (err)
      return res.json(err);
    return res.json(dance);
  });
});

router.get('/Style', (req, res) => {
    Dance.retrieveDanceStyles((err, dance) => {
      if (err)
        return res.json(err);
      return res.json(dance);
    });
  });

router.get('/Style/:danceStyle', function (req, res) {
    var danceStyle = req.params.danceStyle;

    Dance.retrieveByDanceStyle(danceStyle, function (err, dance){
        if (err)
            return res.json(err);
        return res.json(dance);
    });
});

router.get('/Style/:danceStyle/duration/:duration', function (req, res) {
    var danceStyle = req.params.danceStyle;
    var duration = req.params.duration;

    Dance.retrieveStyleUnderDuration(danceStyle, duration, function (err, dance){
        if (err)
            return res.json(err);
        return res.json(dance);
    });
});

router.get(`/:danceName`, function (req, res) {
  var danceName = req.params.danceName;

  Dance.retrieveDanceSongCount(danceName, function (err, dance){
    if (err)
        return res.json(err);
    return res.json(dance);
  });
});

router.get('/:danceName/popularity/:popularity', function (req, res) {
  var danceName = req.params.danceName;
  var popularity = req.params.popularity;

  Dance.retrievePopularDanceSong(danceName, popularity, function (err, dance){
      if (err)
          return res.json(err);
      return res.json(dance);
  });
});

module.exports = router;
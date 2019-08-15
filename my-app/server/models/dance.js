const db = require('../database');

class Dance {
  static retrieveAll (callback) {
    db.query('SELECT danceName, danceStyle from  dance', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static retrieveDanceStyles (callback) {

    db.query('SELECT DISTINCT danceStyle from  dance', (err, res) => {
        if (err.error)
          return callback(err);
        callback(res);
      });
  }

  static retrieveStyleUnderDuration (danceStyle, duration, callback) {
    db.query(`SELECT s.song_title
    FROM song s, matches m, dance d
    WHERE s.duration < ($2) AND s.song_id = m.m_song_id AND m.m_dance_name = d.dancename 
                   AND d.dancestyle = ($1);`,
    [danceStyle, duration], (err, res) => {
        if (err.error)
          return callback(err);
        callback(res);
    });
  }

  static retrieveDanceSongCount (danceName, callback) {
    db.query(`SELECT d.danceName, COUNT(*) as count
    FROM  dance d, matches m, song s
    WHERE s.song_id = m.m_song_id AND d.dancename = m.m_dance_name And 
                  d.dancename = ($1)
    GROUP BY d.dancename;`,
    [danceName], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
  });
  }

  static retrievePopularDanceSong (danceName, popularity, callback) {
    db.query(`SELECT   s.song_title, s.year, s.duration, s.popularity  
    FROM  song s, artist a, dance d, album b, performs p, matches m 
    WHERE s.song_id = m.m_song_id AND b.album_id = p.p_album_id AND p.p_artist_id = a.artist_id AND d.dancename = m.m_dance_name             AND s.popularity >= ($2) AND d.danceName = ($1)  
    ORDER by a.artist_name LIMIT 25;`,
    [danceName, popularity],(err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  /*
  static retrieveByDanceName (dance, callback) {
    db.query(`SELECT danceName, danceStyle from  dance WHERE danceName=($1)`, [dance], (err, res) => {
        if (err.error)
          return callback(err);
        callback(res);
    });
  }
  */

    static retrieveByDanceStyle (danceStyle, callback) {
    db.query(`SELECT danceName from  dance WHERE danceStyle=($1)`, [danceStyle], (err, res) => {
        if (err.error)
          return callback(err);
        callback(res);
    });
  }
}

module.exports = Dance;
const db = require('../database');

class Song {
  static retrieveAll (callback) {
    db.query('SELECT song_id, duration, tempo, song_title, year, popularity, album_id from  song', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  //TODO Make it Retrieve by song and artist name
  static retrieveBySongName (songTitle, callback) {
    db.query(`SELECT song_title, popularity, year, duration from  song WHERE song_title=($1)`, [songTitle], (err, res) => {
        if (err.error)
          return callback(err);
        callback(res);
    });
  }

  static retrieveSongByYear (year, callback) {

    db.query(`SELECT  s.song_title, a.artist_name, s.year, s.duration, s.popularity, d.danceName, d.dancestyle, b.album_title
                FROM   song s, artist a, dance d, album b, performs p, matches m
                WHERE s.album_id = b.album_id AND b.album_id = p.p_album_id AND p.p_artist_id = a.artist_id AND s.song_id = m.m_song_id AND d.danceName = m.m_dance_name AND s.year =($1);`, 
    [year], (err, res) => {
        if (err.error)
          return callback(err);
        callback(res);
    });
  }

  static retrieveDistinctSong (songTitle, callback) {
    db.query(`SELECT DISTINCT  a.artist_name, s.song_title, s.year, s.duration, s.popularity, d.dancename, d.dancestyle, b.album_title
        FROM   song s, artist a, dance d, album b, performs p, matches m
        WHERE s.album_id = b.album_id AND b.album_id = p.p_album_id AND p.p_artist_id = a.artist_id AND s.song_id = m.m_song_id AND d.dancename = m.m_dance_name AND s.song_title = ($1)
        ORDER BY  s.year;`,
        [songTitle], (err, res) => {
            if (err.error)
              return callback(err);
            callback(res);
        });
  }

  static retrieveDancesOnAlbum (album_title, callback) {
    db.query(`SELECT s.song_title, d.dancename 
    FROM song s, dance d, matches m
    WHERE s.song_id = m.m_song_id AND m.m_dance_name = d.dancename AND
    s.song_title IN  (SELECT s1.song_title
                FROM song s1, album a
                WHERE a.album_title = ($1) AND 
    s1.album_id = a.album_id)
    ORDER BY s.song_title ASC;`,
    [album_title], (err, res) => {
        if (err.error)
          return callback(err);
        callback(res);
    });
  }

  static retrieveTop100Songs () {
    db.query(`SELECT s.song_title, a.artist_name 
    FROM Song s, Artist a, Performs p
    WHERE s.album_id = p.p_album_id AND p.p_artist_id = a.artist_id
    ORDER BY popularity DESC 
    LIMIT 100;`, (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = Song;
const db = require('../database');

class Album {

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
  
}

module.exports = Album;
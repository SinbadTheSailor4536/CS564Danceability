import React from 'react';
import '../styleSheets/SongSearchBar.css';

class SongSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: 'Search for a Song by Title ...',
      artist: 'Search for a Song by Artist ...',
    };

    this.handleArtistClick = this.handleArtistClick.bind(this);
    this.handleSongClick = this.handleSongClick.bind(this);
    this.handleSong = this.handleSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleArtistClick(event) {
    this.setState({ artist: '' });
  }
  handleSongClick(event) {
    this.setState({ song: '' });
  }

  handleArtist(event) {
    this.setState({ artist: event.target.value });
  }

  handleSong(event) {
    this.setState({ song: event.target.value });
  }

  handleSubmit(event) {
    alert(
      'A search was submitted: ' + this.state.song + ' by ' + this.state.artist
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="song"
            className="field"
            type="text"
            value={this.state.song}
            onClick={this.handleSongClick}
            onChange={this.handleSong}
          />
          <p> &amp; </p>
          <input
            name="artist"
            className="field"
            type="text"
            value={this.state.artist}
            onClick={this.handleArtistClick}
            onChange={this.handleArtist}
          />
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default SongSearchBar;

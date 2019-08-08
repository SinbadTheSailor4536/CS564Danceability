import React from 'react';
import '../styleSheets/SongSearchBar.css';

class SongSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: 'Search for a Song by Title ...',
      artist: 'Search for a Song by Artist ...',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSong = this.handleSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSongClick(event) {
    this.setState({ song: '' });
  }

  handleSong(event) {
    this.setState({ song: event.target.value });
  }

  handleSubmit(event) {
    alert('A search was submitted: ' + this.state.song);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            className="field"
            type="text"
            value={this.state.song}
            onClick={this.handleSongClick}
            onChange={this.handleSong}
          />
        </label>
        <input className="button" type="submit" value="Submit" />
      </form>
    );
  }
}

export default SongSearchBar;

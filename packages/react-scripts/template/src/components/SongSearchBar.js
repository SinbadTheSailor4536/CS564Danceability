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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(event) {
    this.setState({ [event.target.name]: '' });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
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
            onClick={this.handleClick}
            onChange={this.handleChange}
          />
          <p> &amp; </p>
          <input
            name="artist"
            className="field"
            type="text"
            value={this.state.artist}
            onClick={this.handleClick}
            onChange={this.handleChange}
          />
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default SongSearchBar;

import React from 'react';
import '../styleSheets/SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { song: 'Search for a Song by Title ...' };

    this.handleSong = this.handleSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
            onChange={this.handleSong}
          />
        </label>
        <input className="button" type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchBar;

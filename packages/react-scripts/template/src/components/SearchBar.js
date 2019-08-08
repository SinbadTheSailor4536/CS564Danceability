import React from 'react';
import '../styleSheets/SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { song: 'Search for a Song by Title ...' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSong(event) {
    this.setState({ song: event.target.song });
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
            song={this.state.song}
            onChange={this.handleSong}
          />
          <text> & </text>
        </label>
        <input className="button" type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchBar;

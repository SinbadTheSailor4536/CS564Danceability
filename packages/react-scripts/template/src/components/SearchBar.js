import React from 'react';
import './styleSheets/SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Search for a Song by Title ...' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A search was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Dance Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchBar;

//ReactDOM.render(<SearchBar />, document.getElementById('root'));

import React from 'react';
import '../styleSheets/AdvancedSearchBar.css';

import {
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Jumbotron,
  InputGroup,
  InputGroupAddon,
  Button,
  FormGroup,
  ListGroup,
  ListGroupItem,
  Input,
  Col
} from 'reactstrap';

class AdvancedSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '',
      songYearList: []
    };

    //this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchSongByYear = this.searchSongByYear.bind(this);
  }



  /*handleClick(event) {
    this.setState({ [event.target.name]: '' });
  }*/

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  getSongByYear = (year) => {
    fetch(`/api/song/year/${year}`)
    .then(res => res.json())
    .then(res => {
      var songYearList = res.map((val, i, res) => {

        return ["Song Title: " + val.song_title + ", ", "Artist: " + val.artist_name + ", ",
                "Release Year: " + val.year + ", ", "Duration: " + val.duration + ", ",
                "Popularity: " + val.popularity + ", ", "Dance: " + val.dancename + ", ",
                "Dance Style: " + val.dancestyle + ", ", "Album: " + val.album_title];
      });
      this.setState({ songYearList });
    });
  }

  searchSongByYear(event) {

    this.getSongByYear(this.state.year);
    alert(
      'A search was submitted: for songs realeased in ' + this.state.year
    );
    event.preventDefault();
  }

  componentDidMount () {
    

  }

  render() {
    return (
      <div>
        <form onSubmit={this.searchSongByYear}>
          <h2>Search for a Song by Year</h2>
          <input
              name="year"
              placeholder="Search for a Song by year ..."
              className="field"
              type="text"
              value={this.state.year}
              //onClick={this.handleClick}
              onChange={this.handleChange}
            />
            <input className="button" type="submit" value="Submit" />
            <ListGroup name="songYearList">
              <ListGroupItem>
                  { this.state.songYearList.length === 0 && <p>No Songs Queried</p> }
                  { this.state.songYearList.map((year, i) => <p key={this.state.songYearList[i]}>{year} </p>) }>
              </ListGroupItem>
            </ListGroup>
        </form>
      </div>
    );
  }
}

export default AdvancedSearchBar;
import React from 'react';
import '../styleSheets/DistinctSongSearchBar.css';

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

class DistinctSongSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songTitle: '',
      distinctSongList: []
    };

    //this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchDistinctSong = this.searchDistinctSong.bind(this);
  }



  /*handleClick(event) {
    this.setState({ [event.target.name]: '' });
  }*/

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  getSongDistinct = (songTitle) => {
    fetch(`/api/song/distinct/${songTitle}`)
    .then(res => res.json())
    .then(res => {
      var distinctSongList = res.map((val, i, res) => {

        return ["Song Title: " + val.song_title + ", ", "Artist: " + val.artist_name + ", ",
                "Release Year: " + val.year + ", ", "Duration: " + val.duration + ", ",
                "Popularity: " + val.popularity + ", ", "Dance: " + val.dancename + ", ",
                "Dance Style: " + val.dancestyle + ", ", "Album: " + val.album_title];
      });
      this.setState({ distinctSongList });
    });
  }

  searchDistinctSong(event) {

    this.getSongDistinct(this.state.songTitle);
    alert(
      'A search was submitted: for distinct songs with the title ' + this.state.songTitle
    );
    event.preventDefault();
  }

  componentDidMount () {
    

  }

  render() {
    return (
      <div>
        <form onSubmit={this.searchDistinctSong}>
          <h2>Search for a Distinct Song</h2>
          <input
              name="songTitle"
              placeholder="Search for a distinct Song ..."
              className="field"
              type="text"
              value={this.state.songTitle}
              //onClick={this.handleClick}
              onChange={this.handleChange}
            />
            <input className="button" type="submit" value="Submit" />
            <ListGroup name="distinctSongList">
              <ListGroupItem>
                  { this.state.distinctSongList.length === 0 && <p>No Songs Queried</p> }
                  { this.state.distinctSongList.map((year, i) => <p key={this.state.distinctSongList[i]}>{year} </p>) }>
              </ListGroupItem>
            </ListGroup>
        </form>
      </div>
    );
  }
}

export default DistinctSongSearchBar;
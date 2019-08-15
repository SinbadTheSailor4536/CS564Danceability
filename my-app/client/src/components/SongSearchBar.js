import React from 'react';
import '../styleSheets/SongSearchBar.css';

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

class SongSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '',
      song: '',
      artist: '',
      songList: [],
    };

    //this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchSong = this.searchSong.bind(this);
  }



  /*handleClick(event) {
    this.setState({ [event.target.name]: '' });
  }*/

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  getSongList = () => {
    fetch('/api/song')
    .then(res => res.json())
    .then(res => {
      var songList = res.map(r => r.song_title);
      this.setState({ songList });
    });
  };

  getSong = (song) => {
    fetch(`/api/song/${song}`)
    .then(res => res.json())
    .then(res => {
      var songList = res.map((val, i, res) => {

        return ["Song Title: " + val.song_title + ", ", "Popularity: " + val.popularity + ", ",
                "Release Year: " + val.year + ", ", "Duration: " + val.duration + ", "];
      });
      this.setState({ songList });
    });
  }

  searchSong(event) {

    this.getSong(this.state.song);

    alert(
      'A search was submitted: ' + this.state.song + ' by ' + this.state.artist
    );
    event.preventDefault();
  }

  componentDidMount () {
    

  }

  render() {
    return (
      <div>
        <form onSubmit={this.searchSong}>
          <div>
            <input
              name="song"
              placeholder="Search for a Song by Title ..."
              className="field"
              type="text"
              value={this.state.song}
              //onClick={this.handleClick}
              onChange={this.handleChange}
            />
            <p> &amp; </p>
            <input
              name="artist"
              placeholder="Search for a Song by Artist ..."
              className="field"
              type="text"
              value={this.state.artist}
              //onClick={this.handleClick}
              onChange={this.handleChange}
            />
            <input className="button" type="submit" value="Submit" />
            <ListGroup name="songList">
              <ListGroupItem>
                  { this.state.songList.length === 0 && <p>No Songs Queried</p> }
                  { this.state.songList.map((song, i) => <p key={i}>{song} </p>) }>
              </ListGroupItem>
            </ListGroup>
          </div>
        </form>
      </div>
    );
  }
}

export default SongSearchBar;

import React from 'react';
import '../styleSheets/DancesOnAlbumSearchBar.css';

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

class DancesOnAlbumSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        danceList: [],
        albumTitle: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.findSongsOnAlbum = this.findSongsOnAlbum.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  findSongsOnAlbum(event) {

    this.getAlbumSongs(this.state.albumTitle);

    alert(
        'A search was submitted: Album Title: ' + this.state.albumTitle
    );

    event.preventDefault();
  }

  getAlbumSongs = (albumTitle) => {
      fetch(`/api/song/album/${albumTitle}`)
      .then(res => res.json())
      .then(res => {
      var danceList = res.map((val, i, res) => {

        return ["Song: " + val.song_title + ", ", "Dance: " + val.dancename];
      });
      this.setState({ danceList });
    });
  }

  componentDidMount () {
    
  }

  render() {
    return (
        <div>
            <h2>Find Dances on an Album </h2>
            <form onSubmit={this.findSongsOnAlbum}>
                <Input name="albumTitle" value={this.state.albumTitle} placeholder="Enter an album title ..." type="text" onChange={this.handleChange}/>
                <Input className="button" type="submit" value="Submit" />
            </form>
            <ListGroup name="danceList">
              <ListGroupItem>
                  { this.state.danceList.length === 0 && <p>Dances not Assessed on any Album</p> }
                  { this.state.danceList.map((dance, i) => <p key={i}>{dance} </p>) }>
              </ListGroupItem>
            </ListGroup>
        </div>
    );
  }
}

export default DancesOnAlbumSearchBar;
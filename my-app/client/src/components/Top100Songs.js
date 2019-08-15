import React from 'react';
import '../styleSheets/Top100Songs.css';

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

class Top100Songs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        songList: [],
    };
  }

  getTop100List = () => {
    fetch('/api/song/top')
    .then(res => res.json())
    .then(res => {
      var songList = res.map((val, i, res) => {

        return ["Song: " + val.song_title + ", ", "Artist: " + val.artist_name];
      });
      this.setState({ songList });
    });
  };

  componentDidMount () {
    this.getTop100List();
  }

  render() {
    return (
        <div>
            <h2>Top 100 Songs </h2>
            <ListGroup name="songList">
              <ListGroupItem>
                  { this.state.songList.length === 0 && <p>Number of Songs not Assessed for any Dance</p> }
                  { this.state.songList.map((song, i) => <p key={i}>{song} </p>) }>
              </ListGroupItem>
            </ListGroup>
        </div>
    );
  }
}

export default Top100Songs;
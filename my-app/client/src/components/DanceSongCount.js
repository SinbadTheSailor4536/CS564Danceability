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

class DanceSongCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        danceCountList: [],
        danceList: [],
        danceName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.countSongs = this.countSongs.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  getDanceList = () => {
    fetch('/api/dance')
    .then(res => res.json())
    .then(res => {
      var danceList = res.map(r => r.dancename);
      this.setState({ danceList });
    });
  };

  countSongs(event) {

    this.getDanceSongCount(this.state.danceName);

    alert(
        'A search was submitted: Dance Name: ' + this.state.danceName
      );
      event.preventDefault();
  }

  getDanceSongCount = (danceName) => {
      fetch(`/api/dance/${danceName}`)
      .then(res => res.json())
      .then(res => {
      var danceCountList = res.map((val, i, res) => {

        return ["Dance: " + val.dancename + ", ", "Count: " + val.count];
      });
      this.setState({ danceCountList });
    });
  }

  componentDidMount () {
    this.getDanceList();
  }

  render() {
    return (
        <div>
            <h2>Find how many songs are available for a Dance: </h2>
            <form onSubmit={this.countSongs}>
                <Input name="danceName" value={this.state.danceName} placeholder="Select a Dance" type="select" onChange={this.handleChange}>
                { this.state.danceList.length === 0 && <option>No Dance Selected yet.</option> }
                { this.state.danceList.length > 0 && <option>Select a Dance.</option> }
                { this.state.danceList.map((dance, i) => <option name="dances" key={this.state.danceList[i]}>{dance}</option>) }
                </Input>
                <Input className="button" type="submit" value="Submit" />
            </form>
            <ListGroup name="danceCountList">
              <ListGroupItem>
                  { this.state.danceCountList.length === 0 && <p>Number of Songs not Assessed for any Dance</p> }
                  { this.state.danceCountList.map((dance, i) => <p key={i}>{dance} </p>) }>
              </ListGroupItem>
            </ListGroup>
        </div>
    );
  }
}

export default DanceSongCount;
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

class DancePopularitySearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        popularSongList: [],
        danceList: [],
        danceName: '',
        popularity: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.popularDanceSongs = this.popularDanceSongs.bind(this);
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

  popularDanceSongs(event) {

    this.getPopularDanceSongs(this.state.danceName, this.state.popularity);

    alert(
        'A search was submitted: Dance Name: ' + this.state.danceName + ", Popularity: " + this.state.popularity
      );
      event.preventDefault();
  }

  getPopularDanceSongs = (danceName, popularity) => {
      fetch(`/api/dance/${danceName}/popularity/${popularity}`)
      .then(res => res.json())
      .then(res => {
      var popularSongList = res.map((val, i, res) => {

        return ["Song: " + val.song_title + ", ", "Year: " + val.year + ", " +
                "Duration: " + val.duration + ", ", "Popularity: " + val.popularity];
      });
      this.setState({ popularSongList });
    });
  }

  componentDidMount () {
    this.getDanceList();
  }

  render() {
    return (
        <div>
            <h2>Find Popular Songs for a Dance </h2>
            <form onSubmit={this.popularDanceSongs}>
                <Input name="danceName" value={this.state.danceName} placeholder="Select a Dance" type="select" onChange={this.handleChange}>
                { this.state.danceList.length === 0 && <option>No Dance Selected yet.</option> }
                { this.state.danceList.length > 0 && <option>Select a Dance.</option> }
                { this.state.danceList.map((dance, i) => <option name="dances" key={this.state.danceList[i]}>{dance}</option>) }
                </Input>
                <Input name="popularity" value={this.state.popularity} placeholder="Minimum Popularity [0.0-1.0]" type="text" onChange={this.handleChange}/>
                <Input className="button" type="submit" value="Submit" />
            </form>
            <ListGroup name="danceCountList">
              <ListGroupItem>
                  { this.state.popularSongList.length === 0 && <p>Number of Songs not Assessed for any Dance</p> }
                  { this.state.popularSongList.map((dance, i) => <p key={i}>{dance} </p>) }>
              </ListGroupItem>
            </ListGroup>
        </div>
    );
  }
}

export default DancePopularitySearchBar;
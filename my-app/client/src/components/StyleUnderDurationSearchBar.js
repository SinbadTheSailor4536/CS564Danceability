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

class StyleUnderDurationSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        danceStyle: '',
        duration: '',
        songList: [],
        styleList: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.styleDurationSearch = this.styleDurationSearch.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  styleDurationSearch(event) {

    this.getStyleDuration(this.state.danceStyle, this.state.duration);

    alert(
        'A search was submitted: Dance Style: ' + this.state.danceStyle + ', Duration: ' + this.state.duration
      );
      event.preventDefault();
  }

  getStyleDuration = (danceStyle, duration) => {
    fetch(`/api/dance/style/${danceStyle}/duration/${duration}`)
    .then(res => res.json())
    .then(res => {
      var songList = res.map(r => r.song_title);
      this.setState({ songList });
    });
  }

  getStyleList = () => {
    fetch('/api/dance/style')
    .then(res => res.json())
    .then(res => {
      var styleList = res.map(r => r.dancestyle);
      this.setState({ styleList });
    });
  };

  componentDidMount () {
    this.getStyleList();
  }

  render() {
    return (
        <div>
            <h2>Search Songs by Style with a Maximum Duration</h2>
            <form onSubmit={this.styleDurationSearch}>
                <Input name="danceStyle" value={this.state.danceStyle} placeholder="Select a Dance Style" type="select" onChange={this.handleChange}>
                { this.state.styleList.length === 0 && <option>No Dance Style Selected yet.</option> }
                { this.state.styleList.length > 0 && <option>Any Style</option> }
                { this.state.styleList.map((style, i) => <option key={i}>{style}</option>) }
                </Input>
                <Input name="duration" value={this.state.duration} placeholder="Maximum Duration" type="text" onChange={this.handleChange}/>
                <Input className="button" type="submit" value="Submit" />
            </form>
            <ListGroup name="songList">
              <ListGroupItem>
                  { this.state.songList.length === 0 && <p>No Songs Queried</p> }
                  { this.state.songList.map((song, i) => <p key={i}>{song} </p>) }>
              </ListGroupItem>
            </ListGroup>
        </div>
    );
  }
}

export default StyleUnderDurationSearchBar;

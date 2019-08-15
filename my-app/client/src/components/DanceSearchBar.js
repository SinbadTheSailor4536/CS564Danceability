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

class DanceSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        danceStyle: '',
        danceName: '',
        styleList: [],
        danceList: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateDanceList = this.updateDanceList.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  updateDanceList(event) {
    this.handleChange(event);
    this.getDanceByStyle(event.target.value);
  }

  getStyleList = () => {
    fetch('/api/dance/style')
    .then(res => res.json())
    .then(res => {
      var styleList = res.map(r => r.dancestyle);
      this.setState({ styleList });
    });
  };

  getDanceList = () => {
    fetch('/api/dance')
    .then(res => res.json())
    .then(res => {
      var danceList = res.map(r => r.dancename);
      this.setState({ danceList });
    });
  };

  getDanceByStyle = (danceStyle) => {
    fetch(`/api/dance/style/${danceStyle}`)
    .then(res => res.json())
    .then(res => {
      var danceList = res.map(r => r.dancename);
      this.setState({ danceList });
    });
  }

  componentDidMount () {
    this.getStyleList();
    this.getDanceList();
  }

  render() {
    return (
        <div>
            <FormGroup>
                <Input name="danceStyle" value={this.state.danceStyle} placeholder="Select a Dance Style" type="select" onChange={this.updateDanceList}>
                { this.state.styleList.length === 0 && <option>No Dance Style Selected yet.</option> }
                { this.state.styleList.length > 0 && <option>Any Style</option> }
                { this.state.styleList.map((style, i) => <option key={i}>{style}</option>) }
                </Input>
            </FormGroup>

            <ListGroup name="danceList">
            <ListGroupItem>
                { this.state.danceList.length === 0 && <p>No Dances Queried</p> }
                { this.state.danceList.map((dance, i) => <p key={i}>{dance} </p>) }>
            </ListGroupItem>
          </ListGroup>

            <FormGroup>
                <Input name="danceName" value={this.state.danceName} placeholder="Select a Dance" type="select" onChange={this.handleChange}>
                { this.state.danceList.length === 0 && <option>No Dance Selected yet.</option> }
                { this.state.danceList.length > 0 && <option>Select a Dance.</option> }
                { this.state.danceList.map((dance, i) => <option name="dances" key={this.state.danceList[i]}>{dance}</option>) }
                </Input>
            </FormGroup>
        </div>
    );
  }
}

export default DanceSearchBar;

import React from 'react';
import './App.css';

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
  Input,
  Col
} from 'reactstrap';

import SongSearchBar from './components/SongSearchBar';
import DanceSearchBar from './components/DanceSearchBar';
import AdvancedSearchBar from './components/AdvancedSearchBar';
import DistinctSongSearchBar from './components/DistinctSongSearchBar';
import StyleUnderDurationSearchBar from './components/StyleUnderDurationSearchBar';
import DanceSongCount from './components/DanceSongCount';
import DancePopularitySearchBar from './components/DancePopularitySearchBar';
import DancesOnAlbumSearchBar from './components/DancesOnAlbumSearchBar';
import Top100Songs from './components/Top100Songs';

function App() {


  return (
    <div className="background">
      <div className="center">
        <header className="App-header">
          <h1>Danceability</h1>
          <p>An app for Dancing Musicality!</p>
        </header>
        <div className="left">
          <h2>Quick Song Search</h2>
          <SongSearchBar />
          <h2>Dances By Style</h2>
          <DanceSearchBar />
          <AdvancedSearchBar/>
          <DistinctSongSearchBar/>
          <StyleUnderDurationSearchBar/>
          <DanceSongCount/>
          <DancePopularitySearchBar/>
          <DancesOnAlbumSearchBar/>
          <Top100Songs/>
        </div>
      </div>
    </div>
  );
}

export default App;

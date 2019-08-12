import React from 'react';
import logo from './logo.svg';
import './App.css';
import SongSearchBar from './components/SongSearchBar';
import DurationFields from './components/DurationFields';
import ReleaseYearRange from './components/ReleaseYearRange';
import DanceSearchMenu from './components/DanceSearchMenu';
import OrderByPopularity from './components/OrderByPopularity';
import AdvancedSearch from './components/AdvancedSearch';

function App() {
  return (
    <div className="background">
      <div className="center">
        <header className="App-header">
          <h1>Danceability</h1>
          <p>An app for Dancing Musicality!</p>
        </header>
        <div className="left">
          <h2>Quick Search</h2>
          <SongSearchBar />
          <DanceSearchMenu />

          <AdvancedSearch />
          
        </div>
      </div>
    </div>
  );
}

export default App;

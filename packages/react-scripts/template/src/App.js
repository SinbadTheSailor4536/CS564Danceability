import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SongSearchBar';

function App() {
  return (
    <div className="center">
      <header className="App-header">
        <h1>Danceability</h1>
        <p>An app for Dancing Musicality</p>
      </header>
      <div className="left">
        <h2>Quick Search</h2>
        <SongSearchBar />
      </div>
    </div>
  );
}

export default App;

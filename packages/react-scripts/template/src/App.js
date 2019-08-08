import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <h1>Danceability</h1>
        <p>An app for Dancing Musicality</p>
        <div>
          <h2>Quick Search</h2>
          <SearchBar />
        </div>
      </header>
    </div>
  );
}

export default App;

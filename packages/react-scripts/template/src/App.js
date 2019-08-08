import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Danceability</h1>
        <p>An app for Dancing Musicality</p>
        <h2>Quick Search</h2>
        <SearchBar />
      </header>
    </div>
  );
}

export default App;

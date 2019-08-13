import React from 'react';
import './App.css';
import SongSearchBar from './components/SongSearchBar';
import DanceSearchMenu from './components/DanceSearchMenu';
import AdvancedSearch from './components/AdvancedSearch';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SongQuickSearch from './SongQuickSearch';
import AdvancedSearchPage from './AdvancedSearchPage';
import DanceQuickSearch from './DanceQuickSearch';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path="/SongQuickSearch" component={SongQuickSearch} />
        <Route path="/DanceQuickSearch" component={DanceQuickSearch} />
        <Route path="/AdvancedSearch" component={AdvancedSearchPage} />
       
      </Switch>
    </Router>
  );
}

const Home = () => (

  <div className="background">
      <div className="center">
        <header className="App-header">
          <h1>Danceability</h1>
          <p>A web-app for Dancing Musicality!</p>
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
export default App;

import React, { Component } from 'react';
import { Route } from 'react-router';
import HomePage from './pages/HomePage';
//import AboutPage from './pages/AboutPage';
import TodosPage from './pages/TodosPage';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React &amp; Redux 101</h1>
          <nav>
            <Link to="/">Home</Link>
            {/*<Link to="/about">About</Link>*/}
            <Link to="/todos">Todos</Link>
          </nav>
        </header>
        <Route exact path="/" component={HomePage} />
        {/*<Route exact path="/about" component={AboutPage} />*/}
        <Route exact path="/todos" component={TodosPage} />
        <footer className="App-footer">
          <p>Happy coding</p>
        </footer>
      </div>
    );
  }
}

export default App;

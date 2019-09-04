import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import history from './History.js'
import './main.css';

import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {
  return (
    <Router history={history}>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact/>
      </Switch>
    </Router>
  );
}

export default App;

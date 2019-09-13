import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import history from './History.js'
import './main.css';

import { Provider } from 'react-redux'
import Store from './store'

import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {
  return (
    //The store provided to the provider is the global state.
    <Provider store={Store}>
      <Router history={history}>
        <Navbar/>
        <Switch>
          <Route path="/" component={Home} exact/>
        </Switch>
     </Router>
    </Provider>
  );
}

export default App;

import React from 'react';
// import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <Router>
        <div className="App">
          <header>
            <p>
              Lean Photos
            </p>
          </header>
        </div>
        <Switch>
          <Route exact path="/" />
          <Route path="/photos" component={Dashboard}/>
        </Switch>
    </Router>
  );
}

export default App;

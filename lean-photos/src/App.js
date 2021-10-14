import {React} from 'react';
// import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import styles from './App.module.css';
import Dashboard from './dashboard/Dashboard';

function App(props) {
  console.log(props)
  return (
    <Router>
        <div >
          <header className={styles.header}>
            Lean Photos
            <div className={styles.link}><a href="/photos">Photos</a></div>
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

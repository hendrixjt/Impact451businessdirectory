import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import './resources/styles.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Header from './components/header_footer/Header';
import Header2 from './components/header_footer/Header2';
import Featured from './components/featured';
import Gitstarted from './components/Gitstarted';
import Listings from './components/Listings';
import Gitconnected from './components/Gitconnected';
import Home from './screens/Home';
import JobBoard from './screens/JobBoard/JobBoard';
import CareerForm from './screens/CareerForm';




// import Job from './containers/Job/Job';
import Connection from './screens/Connection';

import './resources/styles.css';
import './app.css';

function App() {
  return (
    <BrowserRouter>
        <div className="site">
          <Header>
            <Link className="nav-button" to="/">Home</Link>
            <Link className="nav-button" to="/jobBoard">GitJobListings</Link>
            <Link className="nav-button" to="/careerForm">GitCareerForm</Link>
            <Link className="nav-button" to="/connection">GitConnected</Link>
          </Header>
          <div className="site-main">
            <Switch>
              <Route path="/" exact="true" component={Home} />
              <Route path="/jobBoard" exact="true" component={JobBoard} />
              <Route path="/careerForm" exact="true" component={CareerForm} />
              <Route path="/connection" exact="true" component={Connection} />
            </Switch>
          </div>
        
      </div>
    </BrowserRouter>
  );
}



export default App;

import React from 'react';
// import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';


import Home from './screens/Home';
import GitStarted from './screens/Gitstarted';
import JobBoard from './screens/JobBoard/JobBoard';
import CareerForm from './screens/CareerForm';
// import Connection from './screens/Connection';



import './resources/styles.css';
import './app.css';

function App() {
  return (
    <BrowserRouter>
        <div>
        
        <Header>
        {/* <i class="fa fa-bars fa-3x"></i> */}
        
        <div className="header-links">
        
         
            <li>
        <Link className="nav-button" to="/">GitHome</Link> 
            </li>
            <li>
        <Link className="nav-button" to="/gitStarted">GitStarted</Link> 
            </li>
           <li> 
        <Link className="nav-button" to="/jobBoard">GitSearching</Link>
          </li>
          <li>
        <Link className="nav-button" to="/careerForm">GitCareerForm</Link>
            </li>
            <li>
        <Link className="nav-button" to="/connection">GitinTouch</Link>
            </li>

        </div>

        </Header>

        <Switch>
          <Route path="/" exact="true" component={Home} /> 
          <Route path="/gitStarted" exact="true" component={GitStarted} /> 
          <Route path="/jobBoard" exact="true" component={JobBoard} />
          <Route path="/careerForm" exact="true" component={CareerForm} />
          {/* <Route path="/connection" exact="true" component={Connection} /> */}
        </Switch>
       
        <Footer/>
       
        </div>
    
    </BrowserRouter>
    
  );
}


export default App;

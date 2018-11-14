import React  from 'react';
// import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';

import Home from './screens/Home';
import JobBoard from './screens/JobBoard/JobBoard';
import CareerForm from './screens/CareerForm';
import Connection from './screens/Connection';

import ReactYouTubeExample from './screens/Connection';



// import Job from './containers/Job/Job';

import './resources/styles.css';
import './app.css';

function App() {
  return (
    <BrowserRouter>
        <div>
        
        <Header>
        <i class="fa fa-bars fa-3x"></i>
        <i class="fa fa-times fa-3x"></i>
        <div class="header-links">
        
         
            <li>
        <Link className="nav-button" to="/">Home</Link> 
            </li>
            <li>
        <Link className="nav-button" to="/jobBoard">GitSearching</Link>
            </li>
        <Link className="nav-button" to="/careerForm">GitCareerForm</Link>
            <li>
        <Link className="nav-button" to="/connection">GitConnected</Link>
            </li>

        </div>

        </Header>

        <Switch>
          <Route path="/" exact="true" component={Home} /> 
          <Route path="/jobBoard" exact="true" component={JobBoard} />
          <Route path="/careerForm" exact="true" component={CareerForm} />
          <Route path="/connection" exact="true" component={Connection} />
        </Switch>

        <Footer/>
       
        </div>
    
    </BrowserRouter>
    
  );
}



export default App;

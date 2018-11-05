import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import Gitstarted from './components/Gitstarted';
import Listings from './components/Listings';
import Gitconnected from './components/Gitconnected';

import Job from './containers/Job/Job';
import Form from './components/Form/Form';

class App extends Component {
  render() {
    return (
      <div className="App"style={{height:"1500px", background:'cornflowerblue'}}>
        <Header/> 
        <Featured/>
        <Gitstarted/>
        <Listings/>
        <Gitconnected/>
        <Job />
        <Form/>
      </div>
    );
  }
}

export default App;

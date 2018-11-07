import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import Gitstarted from './components/Gitstarted';
import Listings from './components/Listings';
// import Gitconnected from './components/Gitconnected';
import ReactYouTubeExample from './components/Gitconnected';

import Job from './containers/Job/Job';

class App extends Component {
  render() {
    return (
      <div className="App"style={{height:"1500px", background:'cornflowerblue'}}>
        <Header/> 
        <Featured/>
        <Gitstarted/>
        <Listings/>
        <ReactYouTubeExample videoId= 'HvZU41cFJR0'/>
        <Job />
      </div>
    );
  }
}

export default App;

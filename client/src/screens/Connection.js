// import React from 'react';
import Header from '../components/header_footer/Header';

import React, { Component } from 'react'
import YouTube from 'react-youtube';

import './Connection.css';
//www.youtube.com/watch?v=HvZU41cFJR0&t=4s
//const Home = () => <Header title= "Home" />;
const Connection = () => <div style={{backgroundColor: 'blue'}} />;



 class ReactYouTubeExample extends Component {
    
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo()
        console.log(event.target)
      }
    render() {
        const opts = {
          height: '390',
          width: '640',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
          }
        };
        const {videoId} = this.props
        return (
          <YouTube
            videoId={'HvZU41cFJR0'}
            opts={opts}
            onReady={this.videoOnReady}
          />
        );
      }
    }
    export default ReactYouTubeExample
// export default Connection;
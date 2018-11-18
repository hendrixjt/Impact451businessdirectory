import React, { Component } from 'react';
import ReactPlayer from 'react-player'





class Video extends Component {
    render() {
      return (
        <div>
          <ReactPlayer
            url= "https://player.vimeo.com/video/301328531"
            className='react-player'
          //  playing 
            // width="100%"
            // height=
          />
        </div>
      );
    }
  }
  
export default Video;
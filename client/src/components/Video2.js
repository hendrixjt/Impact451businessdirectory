import React, { Component } from 'react';
import ReactPlayer from 'react-player'





class Video2 extends Component {
    render() {
      return (
        <div>
          <ReactPlayer
            url= "https://player.vimeo.com/video/301570820"
            className='react-player'
           preload 
            width="560"
            height="349"
          />
        </div>
      );
    }
  }
  
export default Video2;
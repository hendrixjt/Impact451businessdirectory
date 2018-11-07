


import React, { Component } from 'react'
import YouTube from 'react-youtube';

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
            videoId={videoId}
            opts={opts}
            onReady={this.videoOnReady}
          />
        );
      }
    }
    export default ReactYouTubeExample
      


// const Gitconnected = () => {
//     return (
//         <div className="bck_black">
//             <div className="center_wrapper">
//                 <div className="g_wrapper">

                 
                                                  
//                 </div>
//              </div>
//          </div>
                            
                            
//     );
// };

// export default Gitconnected;
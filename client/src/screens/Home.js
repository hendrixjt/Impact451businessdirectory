import React, { Component } from 'react';
import testImg from  '../resources/images/Main.jpg';
import ReactPlayer from 'react-player'
import Video from '../components/Video';
// import BackgroundVideo from '../components/BackgroundVideo';

// class App extends Component {
//     render() {
//       return (
//         <div>
//           <ReactPlayer
//             url='https://player.vimeo.com/video/301328531'
//             className='react-player'
//             playing
//             width='100%'
//             height='100%'
//           />
//         </div>
//       );
//     }
//   }
  

import { Link } from 'react-router-dom'
// import Button from '@material-ui/core/Button';


const Home = () => {
  
    return (
        // <div> 
        //     {/* <Video /> */}
        // </div>    
        <div className="bck_black">
        
        <div className="home_box">
           <div className="font_righteous home_title">
            GitHired 
           </div>
           <div className="font_righteous home_subtitle">
           Revivalists in Tech

           <button id="submit" href="/">Play Video   </button>
          
           <button id="submit"> <Link className="submit" to="/gitStarted">GitStarted</Link> </button>
            
           </div>
          
           </div>
          
                        <div
                            className="background_image"
                            style={{
                                height: `${window.innerHeight}px`,
                                backgroundImage: `url(${testImg})`   
                            }}
                        ></div> 
                        {/* <div className="player-wrapper">
                           <div className="react-player">
                            <Video />
                           </div>
                        </div> */}
            </div>
        
      
                         
        );
    };
    
//    class App extends Component {
//        render () {
//            return <ReactPlayer url="https://player.vimeo.com/video/301328531" playing/>
//        }
//    }
export default Home

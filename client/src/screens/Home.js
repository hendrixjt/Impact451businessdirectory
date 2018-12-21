import React, { Component } from 'react';
import testImg from  '../resources/images/Main.jpg';
import ReactPlayer from 'react-player';
import Video from '../components/Video';
// import Split from '../components/Ui/Split';

import Video2 from '../components/Video2';

import { Link } from 'react-router-dom'





const Home = () => {
  
    return (
        

    
        <div className="bck_black">
         
        <div className="home_box">
       
           <div className="font_righteous home_title">
            GitHired 
           </div>

           <div className="font_righteous home_subtitle">
           Techies at Work
           </div>
         </div> 


         <div className="background_image"
                      
                      style={{ height: `${window.innerHeight}px`,
                          backgroundImage: `url(${testImg})`
                      }} >
                  </div>


<div class="aboutleft">
<div class='split-pane col-xs-12 col-sm-6 uiux-side'>
 <div>
 
   <div class='text-content'>
   <div className="video-wrapper2 iframe">
                             <Video2 />
                            </div>      
            
     <div class="bold"><span class="gitstarted_l">GitHired</span> can help you prepare for the job search
     <button id="submit"> <Link className="submit" to="/gitStarted">GitStarted</Link> </button></div>
   </div>
   
  

 </div>
</div>
</div> 

        </div>        
        );
    };
    

export default Home

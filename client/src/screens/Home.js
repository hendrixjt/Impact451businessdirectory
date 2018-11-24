import React from 'react';
import testImg from  '../resources/images/Main.jpg';
// import GoogleMaps from '../components/Map';
import { Link } from 'react-router-dom'
// import Button from '@material-ui/core/Button';


const Home = () => {
  
    return (
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
                        <div>
                            {/* <h1>Hello to my wonderful maps!</h1>
                            <GoogleMaps/> */}
                        {/* > */}

                          
                        </div>
                        
                        


    </div>


  




      











        
        
                       
    
                
                        
                        
                        
                        
                       
    );                
    };
 
 
 
 export default Home;


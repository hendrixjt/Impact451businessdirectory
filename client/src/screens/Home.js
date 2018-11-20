import React from 'react';
import testImg from  '../resources/images/Main.jpg';
// import { Link } from 'react-router-dom'
// import Button from '@material-ui/core/Button';


const Home = () => {
  
    return (
        <div className="bck_black">
        
        <div className="home_box">
           <div className="font_righteous home_title">
            GitHired 
           </div>
           <div className="font_righteous home_subtitle">
           Revivalist in Tech


 {/* <Button href="/jobBoard" className={classes.button}>Link</Button> */}
           <button id="submit" href="/">Play Video   </button>
           
            <button type="submit" id="submit"  class="btn btn-lg">GitStarted </button>
           </div>
          
          
           
           
           </div>
          
            
           
                        <div
                            className="background_image"
                            style={{
                                height: `${window.innerHeight}px`,
                                backgroundImage: `url(${testImg})`
                              
                            }}
                        >
                        </div>
                        </div>
                        
                        
                       
    );                
    };
 
 
 
 export default Home;


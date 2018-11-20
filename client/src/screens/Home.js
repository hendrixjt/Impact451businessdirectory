import React from 'react';
import testImg from  '../resources/images/Main.jpg';
// import GoogleMaps from '../components/Map';


const Home = () => {
  
    return (
        <div className="bck_black">
        
        <div className="home_box">
           <div className="font_righteous home_title">
            GitHired 
           </div>
           <div className="font_righteous home_subtitle">
           Revivalist in Tech

           <button type="submit" id="submit"  class="btn btn-lg" >Play Video</button>
            
            <button type="submit" id="submit"  class="btn btn-lg">Git Started </button>
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
                        </div>
                        </div>
                        
                        
                        
                       
    );                
    };
 
 
 
 export default Home;


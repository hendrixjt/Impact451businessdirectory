import React from 'react';
import testImg from  '../resources/images/Main.jpg';


const Home = () => {
  
    return (
        <div className="bck_black">
        
            <div className="home_wrapper">
           
                        <div
                            className="background_image"
                            style={{
                                height: `${window.innerHeight}px`,
                                backgroundImage: `url(${testImg})`
                              
                            }}
                        ></div>
                        </div>
                        </div>
                      
                        
        );
    };
 
 
 
 export default Home;
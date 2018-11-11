import React from 'react';
import testImg from  '../resources/images/slide_one.jpg';


const Home = () => {
    
    return (
        <div className="bck_black">
        <div className="center_wrapper">
            <div className="gs_wrapper">
            
                        <div
                            className="background_image"
                            style={{
                                height: `${window.innerHeight}px`,
                                backgroundImage: `url(${testImg})`
                            }}
                        ></div> 
                        </div>
                        </div>
                        </div>
                         
        );
    };



export default Home;
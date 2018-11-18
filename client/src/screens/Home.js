import React from 'react';
import testImg from  '../resources/images/slide_one.jpg';
import GoogleMaps from '../components/Map';


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
                        <div>
                            <h1>Hello to my wonderful maps!</h1>
                            <GoogleMaps/>
                        </div>
                        </div>
                        </div>
                        </div>
                         
        );
    };



export default Home;
import React from 'react';
import icon_calendar from '../resources/images/icons/calendar.png';
import testImg from  '../resources/images/Main.jpg';
import { Link } from 'react-router-dom'

const Gitstarted = () => {
  
    return (
        
        <div className="gitstarted_info">
     
       <div className="steps">
      
       <h2>GitStarted</h2>
       <p><span class="gitstarted_l">GitHired</span> can help you prepare for the job search</p>
      

        </div>
        
        
        
        
 
                 <div className="center_wrapper"> 
        

                    <div className="gs_wrapper">
                  


                    <div className="gs_item">
                        <div className="gs_outer">
                            <div className="gs_inner">
                            <div className="gs_icon_square"></div>
                                <div
                                    className="gs_icon"
                                    style={{
                                        background:`url(${icon_calendar})`
                                        
                                    }}
                                
                                ></div>
                                <div className="gs_title">
                                Workshop
                                </div>
                                <div className="gs_description">
                                Attend the Next Career Services Workshop

                               </div>
                               <button id="submit"> <Link className="submit" to="https://calendly.com/andrew-careerservices">Schedule Now</Link> </button>
                            </div>
                            </div>
                        </div>
                                   


                        <div className="gs_item">
                        <div className="gs_outer">
                            <div className="gs_inner">
                                <div className="gs_icon_square"></div>
                                <div
                                    className="gs_icon"
                                    style={{
                                        background:`url(${icon_calendar})`
                                    }}
                                ></div>
                                <div className="gs_title">
                                Meeting
                                </div>
                                <div className="gs_description">
                                Plan and Discuss Employment Goals
                               </div>
                               <button id="submit"> <Link className="submit" to="https://calendly.com/andrew-careerservices">Schedule Now</Link> </button>
                            </div>
                            </div>
                        </div>
     
                    </div>
                    </div> 
                    </div>
                 
     
        );
     };
     
     export default Gitstarted;
      
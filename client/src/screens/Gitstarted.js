import React from 'react';
import icon_calendar from '../resources/images/icons/calendar.png';
import clipboard from '../resources/images/icons/clipboard.png';
import form from '../resources/images/icons/form.png';
import laptop from '../resources/images/icons/laptop.png';
import testImg from  '../resources/images/Main.jpg';
import Video2 from '../components/Video2';
import { Link } from 'react-router-dom'
import Video from '../components/Video';
const Gitstarted = () => {
  
    return (
        
       
        <div className="gitstarted_info">
        

       
      
       <div className="steps">
  
   <h2>GitStarted</h2>
   <p><span class="gitstarted_l">GitHired.</span> It's as easy as 1, 2, 3.</p>
 

   </div>

    

         
 
                 <div className="center_wrapper"> 
        
                    <div className="gs_wrapper"> 
                  
                    <div className="gs_item">
                        <div className="gs_outer">
                            <div className="gs_inner">
                            <div className="gs_icon_square">
                           
                            </div>
                                <div className="gs_icon"
                               
                                style={{
                                        background:`url(${clipboard})`
                                        
                                    }}
                                
                                ></div>
                               
                                <div className="gs_title">
                                <h4>1</h4>
                                Career Form
                                </div>
                                <div className="gs_description">
                                Tell us about your career needs

                               </div>
                              
                               <button id="submit"> <Link className="submit" to="/careerForm">Career Form</Link> </button>
                               
                            
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
                                        background:`url(${laptop})`
                                        
                                    }}
                                
                                ></div>
                                <div className="gs_title">
                                <h4>2</h4>
                                Workshop
                                </div>
                                <div className="gs_description">
                                Attend the next Career Services Workshop

                               </div>
                               <a href="https://calendly.com/andrew-careerservices" ><button id="submit">Get Equipped</button></a>
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
                                <h4>3</h4>
                                Meeting
                                </div>
                                <div className="gs_description">
                                Plan and Discuss Employment Goals
                               </div>
                               <div>
                               <a href="https://calendly.com/andrew-careerservices" ><button id="submit">Schedule Now</button></a>
                               </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="video-wrapper">
                                <div className="video-wrapper iframe">
                                  <Video />
                                  </div>
                              </div>  */}
                    </div>
                    </div> 
                   </div>
                    
             
     
        );
     };
     
     export default Gitstarted;
      
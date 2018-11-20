import React from 'react';
import icon_calendar from '../resources/images/icons/calendar.png';

const Gitstarted = () => {
  
    return (
            
                <div className="center_wrapper">    
                    <div className="gs_wrapper">
                   
                    <div className="gs_item">
                        <div className="gs_outer">
                            <div className="gs_inner">
                                <div className="gs_icon_square bck_purple"></div>
                                <div
                                    className="gs_icon"
                                    style={{
                                        background:`url(${icon_calendar})`
                                    }}
                                ></div>
                                <div className="gs_title">
                                Git Started
                                </div>
                                <div className="gs_description">
                                Attend the next career services workshop
                               </div>
                            </div>
                            </div>
                        </div>
     
                        <div className="gs_item">
                        <div className="gs_outer">
                            <div className="gs_inner">
                                <div className="gs_icon_square bck_purple"></div>
                                <div
                                    className="gs_icon"
                                    style={{
                                        background:`url(${icon_calendar})`
                                    }}
                                ></div>
                                <div className="gs_title">
                                Schedule
                                </div>
                                <div className="gs_description">
                                Schedule a call to discuss employment goals
                               </div>
                            </div>
                            </div>
                        </div>
     
                       
                    </div>
                </div>
     
        );
     };
     
     export default Gitstarted;
      
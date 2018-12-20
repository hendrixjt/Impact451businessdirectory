import React from 'react';

const Split = () => {
    return (
        
        <div className="bck_black">
        <div class="split left">
           <div class="centered">
             <img src="img_avatar2.png" alt="Avatar woman"/>
             <h2>VIDEO</h2>
             <p>Some text.</p>
           </div>
         </div>
        


         <div class="split right">
           <div class="centered">
             <img src="img_avatar.png" alt="Avatar man"/>
             <h2>ABOUT</h2>
             <p>Some text here too.</p>
           </div>
         </div>
          </div>

    );
};

export default Split;
import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_firebrick">
        <Fade delay={500}>
        <div className="font_righteous footer_logo_githired">GitHired</div>
        <div className="footer_copyright">
        GitHired 2018. All right reserved. bla bla 
        </div>
        </Fade>
        </footer>
            
       
    );
};

export default Footer;
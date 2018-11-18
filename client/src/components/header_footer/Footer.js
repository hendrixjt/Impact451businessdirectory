import React from 'react';
import Fade from 'react-reveal/Fade';

import { Monkey } from '../Ui/Monkey';

const Footer = () => {
    return (
        <footer className="bottom">
        
        <Fade delay={500}>
        <div className="footer_logo">
            <Monkey
                width="70px"
                height="70px"
                link={true}
                linkTo="/"
            />
        </div>

        <div className="footer_copyright">
        GitHired 2018. All right reserved. 
        </div>
        </Fade>
        </footer>
            
       
    );
};

export default Footer;


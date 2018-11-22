import React from 'react';
import Fade from 'react-reveal/Fade';

// import { Monkey }  from '../Ui/Monkey';

const Footer = () => {
    return (
        <footer className="bottom">
        
        <Fade delay={500}>
        {/* <div className="footer_logo">
            <Monkey
                margin="0_auto"
                text-align= "center"
                
                width="70px"
                height="70px"
                link={true}
                linkTo="/"
            />
        </div> */}

        <div class="section fp-auto-height">
        <div class="font_righteous footer">
        <p>Connect with GitHired</p>
        <div class="social-links">
        <span><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a></span>
        <span><a href="https://github.com/hendrixjt/Impact451businessdirectory" target="_blank"><i class="fab fa-github"></i></a></span>
        <span><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></span>
        <span><a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a></span>
        <span><a href="https://vimeo.com/"><i class="fab fa-fab fa-vimeo-v"></i></a></span>
      </div>
    </div>
  </div>
  
        <div className="footer_copyright">
        GitHired 2018. All right reserved. 
        </div>
        </Fade>
        </footer>
            
       
    );
};

export default Footer;


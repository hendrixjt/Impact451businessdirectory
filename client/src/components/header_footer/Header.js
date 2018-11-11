import React, { Component } from 'react';


//import Featured from './components/featured';
//import Gitstarted from './components/Gitstarted';
//import Listings from './components/Listings';
//import Gitconnected from './components/Gitconnected';
//import Job from './containers/Job/Job';

//import injectTapEventPlugin from 'react-tap-event-plugin';
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'; 


class Header extends Component {
    
        state = {
            drawerOpen: false,
            headerShow: false
        }
     
        componentDidMount(){
            window.addEventListener('scroll', this.handleScroll)
        }
        handleScroll = () => {
            if(window.scrollY > 0){
                this.setState({
                    headerShow: true
                })
            } else {
                this.setState({
                    headerShow: false
                })
            }
        }
     
        toggleDrawer = (value) => {
            this.setState({
                drawerOpen:value
               
            })
        }
        render () {
         return (
           <AppBar
           position="fixed"
           style={{
             backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
               boxShadow: 'none',
               padding: '10px 0px'
           }}
           >
           <Toolbar>
          
               <div className="header_logo">
                   <div className="font_righteous header_logo_githired"> GitHired </div>
                   <div className="header_logo_title">A Website for Coders by Coders! </div>
               </div>
               <div className="header_labels">{this.props.children}</div>


             
              <Button
              aria-label="Menu"
              color="inherit"
              onClick={()=> this.toggleDrawer(true)}
           >
             </Button>
          
           
              
               </Toolbar>
           </AppBar>
         );
   }
}

export default Header;

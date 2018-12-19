import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

import { Monkey } from '../Ui/Monkey';

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
               padding: '10px 10px'
           }}
           >
           
           <Toolbar style= {{display:'flex'}}>
                <div style={{flexGrow: 1}}>
                    <div className="header_logo">
                        <Monkey
                            link={true}
                            linkTo="/"
                            width="420px"
                            height="95px"
                            float="left"
                            
                    />
                
               </div>
               </div>
               


               <div className="header_links">{this.props.children}</div>
               
               </Toolbar>
               
           </AppBar>
         );
   }
}

export default Header;

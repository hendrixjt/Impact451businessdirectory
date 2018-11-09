import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
   return (
       <Drawer
       anchor="right"
       open={props.open}
       OnClose={()=> props.onClose(false)}
       >
       <List component="nav">
           <ListItem button onClick={()=> console.log('Featured')}>
               Git Started
           </ListItem>
           <ListItem button onclick={()=> console.log('Git Searching')}>
               Git Searching/Git Hired
           </ListItem>
           <ListItem button onClick={()=> console.log('Git Inspired')}>
               Git Inspired
           </ListItem>
           <ListItem button onClick={()=> console.log('Git Connected')}>
               Git Connected
           </ListItem>
             
          
       </List>
       </Drawer>
   );
};

export default SideDrawer;

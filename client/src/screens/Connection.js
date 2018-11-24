
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import testImg from '../resources/images/Main.jpg';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button:{
    background:"#FF6363",
    color:"white",
    marginLeft: theme.spacing.unit,
    marginTop: '7px'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    color:"white",
    borderRadius: '5px'
  },
  dense: {
    marginTop: 19,
  },
});
const Header={
  textAlign: "center",
  fontFamily: 'Righteous',
  color:" #FF6363",
  // textShadow: "0 2px 3px black"
}



class ConnectionForm extends React.Component {
  state = {
    name: '',
    email: '',
    multiline: '',
    
  };
 

   handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });

  };

  render() {
    const { classes } = this.props;

    return (
      <div className="background_image"
      style={{
          height: `${window.innerHeight}px`,
          backgroundImage: `url(${testImg})`,
          backgroundAttachment: `fixed`
        
      }}
  >
      <div style={{marginTop: 100, marginRight: '20%', marginLeft: '20%', marginBottom: 0, }}className={classes.root}>
      <h1 style={Header}>Git In Touch</h1>
      <h3 style={Header}>We'd love to hear form you. Send us a message and we'll respond as soon as possible.</h3>

       <form>
        <TextField 
          id="outlined-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          style={{width:'97%', background:"white"}}
          margin="normal"
          textAlign="center"
        />

        <TextField
          id="outlined-email"
          label="Email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('email')}
          style={{width:'97%', background:"white"}}
          margin="normal"
        />
  
        <TextField
          id="filled-multiline-static"
          label="Message"
          multiline
          rowsMax="8"
          value={this.state.message}
          onChange={this.handleChange('message')}
          className={classes.textField}
          style={{width: "97%", background:"white"}}
          margin="normal"
        />

        <Button 
                  type="submit"
                  id="lat-button-file"
                  variant="contained"
                  className={classes.button}
                  onClick={this.handleSubmit}
                >
                  Submit
         </Button>  

      </form>
      
      </div>
      </div>
    
    );
  }
}


export default withStyles(styles)(ConnectionForm);


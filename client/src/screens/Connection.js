
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button:{
    background:"#FF6363",
    color:"white"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});
const Header={
  textAlign: "center",
  color:" #FF6363",
  textShadow: "0 2px 3px black"
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
      <div style={{marginTop: 200, marginRight: 100, marginLeft: 100, marginBottom: 300, }}className={classes.root}>
      <h1 style={Header}>Git In Touch</h1>
      <h3 style={Header}>We'd love to hear form you. Send us a message and we'll respond as soon as possible.</h3>
       <form>
        <TextField 
          id="outlined-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          style={{width:'97%'}}
          margin="normal"
          textAlign="center"
        />

        <TextField
          id="outlined-email"
          label="Email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('email')}
          style={{width:'97%'}}
          margin="normal"
        />
  
        <TextField
          id="outlined-multiline-flexible"
          label="Message"
          multiline
          rowsMax="4"
          value={this.state.message}
          onChange={this.handleChange('message')}
          className={classes.textField}
          style={{width:'97%'}}
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
    );
  }
}


export default withStyles(styles)(ConnectionForm);


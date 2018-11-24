import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import green from "@material-ui/core/colors/green";
import Radio from "@material-ui/core/Radio";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import red from '@material-ui/core/colors/red';
import testImg from '../resources/images/Main.jpg';


import axios from "axios";

import './CareerForm.css';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}



const styles = theme => ({
  root: {
    color: red[600],
    "&$checked": {
      color: red[500],
    }
  },
  checked: {},
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
  margin: theme.spacing.unit,
  borderRadius: '5px',
  },
  button:{
    background:"#FF6363",
    color:"white",
    marginLeft: theme.spacing.unit,
    marginTop: '15px',
    marginBottom: '15px'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    background:'white',
    borderRadius: '5px',
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  paperr:{
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    textAlign: "center"
  }
});

const Header={
  textAlign: "center",
  fontFamily: 'Righteous',
  color:" #FF6363",
  // textShadow: "0 2px 3px black",

}


class CareerForm extends React.Component {
  state = {
    name: "",
    email: "",
    currentmodule: "",
    relocate:"",
    path: {
      javascript: false,
      java: false,
      ruby: false,
      DataScience: false,
      cybersecurity: false,
    },
    message: "",
    multiline: "Flexible",
    shrink: false,
    value: "",
    modal: {
      open: false
    }
  };
  tempState = {};

  handleOpenM = () => {
    this.setState({
      modal: {
        open: true
      }
    });
  };

  handleCloseM = () => {
    this.setState({
      modal: {
        open: false
      }
    });
  };

  handleChange = event => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleChangeR = event => {
    this.setState({ recommend: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleChangeC = name => event => {
    if (name == "message") {
      this.setState({
        message: event.target.value
      });
    } else {
      let temp = this.state.path;
      temp[[name]] = event.target.checked;
      this.setState({
        improvements: temp
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    

    console.log(this.state);

    

    axios.post('/users', this.state).then(function (response) {
      console.log("===response=======>", response)
      
  
     }).catch((error)=> {
       console.log("========errorr===>", error.message)
     });
     this.handleOpenM();
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="background_image"
      style={{
          // height: `${window.innerHeight}px`,
          backgroundImage: `url(${testImg})`,
          backgroundAttachment: `fixed`
        
      }}
    >
      <div style={{marginTop: 100, marginRight: '20%', marginLeft:'20%', marginBottom:0 }}className={classes.root}>
        <h1 style={Header}>Career Services Form</h1>
        <h3 style={Header}>Please submit form  before contacting your Career Services Representative.</h3>
        <Grid container spacing={75}>
          <Grid item xs={12}>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.modal.open}
              onClose={this.handleCloseM}
            >
              <div style={getModalStyle()} className={classes.paperr}>
                <Typography variant="title" id="modal-title">
                  Form successfully submitted!
                </Typography>
                <Typography variant="subheading" id="simple-modal-description">
                  {/* <strong>form:</strong> {JSON.stringify(this.state, null, 2)}
                  )} */}
                </Typography>
              </div>
            </Modal>

            <form autoComplete="off">     
                <TextField
                  id="filled-name-input"
                  label= "Name"
                  Placeholder="Name"
                  className={classes.textField}
                  style={{marginLeft: '7px', width:'97%',background:"white"}}
                  margin="normal"
                  variant="filled"
                  name="name"
                  onChange={this.handleChange}
                />
              
                <TextField
                  id="filled-email-input"
                  label="Email"
                  className={classes.textField}
                  type="email"
                  name="email"
                  autoComplete="email"
                  style={{marginLeft:"7px", width:'97%', background:"white"}}
                  margin="normal"
                  variant="filled"
                  onChange={this.handleChange}
                />
              
                <TextField
                  id="filled-current module-input"
                  label="Current Module"
                  className={classes.textField}
                  style={{width:'97%', background:"white"}}
                  margin="normal"
                  variant="filled"
                  name="currentmodule"
                  onChange={this.handleChange}
                />
             
                <div>
                  <FormControl
                    component="fieldset"
                    style={{width: '97%', background:"white"}}
                    className={classes.formControl}
                  >
                    <label component="legend"
                    style={{color:'grey', marginTop: '7px'}}>
                      Are you willing to relocate?
                    </label>
                    <RadioGroup
                      aria-label="relocate"
                      name="relocate"
                      className={classes.group}
                      value={this.state.relocate}
                      onChange={this.handleChange}
                      control= {<Radio color='primary'/>}
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio color="primary" />}
                        label="Yes"
                        style={{marginLeft: '2px'}}
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio color="primary" />}
                        label="No"
                        style={{marginLeft: '2px'}}
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
            
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                  style={{width:'97%', background:"white"}}
                >
                  <label component="legend"
                  style={{color:'grey', marginTop: '7px'}}>
                    Which path are you enrolled in?:
                  </label>
                  <RadioGroup
                    name="path"
                    value={this.state.path}
                    onChange={this.handleChange}
                  >
                    <FormControlLabel
                      control={<Radio color="primary" />}
                      value="javascript"
                      label="JavaScript"
                      style={{marginLeft: '2px'}}
                    />

                    <FormControlLabel
                      control={<Radio color="primary" />}
                      value="java"
                      label="Java"
                      style={{marginLeft: '2px'}}
                    />

                    <FormControlLabel
                      control={<Radio color="primary" />}
                      value="ruby"
                      label="Ruby"
                      style={{marginLeft: '2px'}}
                    />

                    <FormControlLabel
                      control={<Radio color="primary" />}
                      value="datascience"
                      label="Data Science"
                      style={{marginLeft: '2px'}}
                    />

                    <FormControlLabel
                      control={<Radio color="primary" />}
                      value="cybersecurity"
                      label="Cyber Security"
                      style={{marginLeft: '2px'}}
                    />
                  </RadioGroup>
                </FormControl>
             
                <TextField
                  id="filled-multiline-static"
                  label="Additional Information"
                  multiline
                  rows="8"
                  defaultValue=""
                  className={classes.textField}
                  style={{width:'97%', background:"white"}}
                  margin="normal"
                  variant="filled"
                  onChange={this.handleChangeC("message")}
                />

                <Button
                  type="submit"
                  variant="contained"
                  className={classes.button}
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
            </form>
          </Grid>
        </Grid>
      </div>
      </div>
    );
  }
}

export default withStyles(styles)(CareerForm);



  
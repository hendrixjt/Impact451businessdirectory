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
    color: green[600],
    "&$checked": {
      color: green[500]
    }
  },
  checked: {},
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
  marginLeft: theme.spacing.unit,
  marginRight: theme.spacing.unit,
   
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  paperr: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

const Header={
  textAlign: "center",
  color: "Grey",
  
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
    value: "female",
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
      // e.setState({
      //   messageFromServer: response.data
      // });
  
     }).catch((error)=> {
       console.log("========errorr===>", error.message)
     });
    this.handleOpenM();
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={{marginTop: 100, marginRight: '20%', marginLeft:'20%', marginBottom:0 }}className={classes.root}>
        <h2 style={Header}>Career Services Form</h2>
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
              <Paper className={classes.paper}>
                <TextField
                  id="filled-name-input"
                  label="Name"
                  Placeholder="Name"
                  className={classes.textField}
                  style={{width:'97%'}}
                  margin="normal"
                  variant="filled"
                  name="name"
                  onChange={this.handleChange}
                />
              </Paper>

              <Paper item xs={12}>
                <TextField
                  id="filled-email-input"
                  label="Email"
                  className={classes.textField}
                  type="email"
                  name="email"
                  autoComplete="email"
                  style={{width:'97%'}}
                  margin="normal"
                  variant="filled"
                  onChange={this.handleChange}
                />
              </Paper>

              <Paper className={classes.paper}>
                <TextField
                  id="filled-Current Module-input"
                  label="Current Module"
                  className={classes.textField}
                  style={{width:'97%'}}
                  margin="normal"
                  variant="filled"
                  name="currentmodule"
                  onChange={this.handleChange}
                />
              </Paper>

              <Paper  item xs={12}>
                <div>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">
                      Are you willing to relocate?
                    </FormLabel>
                    <RadioGroup
                      aria-label="relocate"
                      name="relocate"
                      className={classes.group}
                      value={this.state.relocate}
                      onChange={this.handleChange}
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio color="primary" />}
                        label="Yes"
                        labelPlacement="start"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio color="primary" />}
                        label="No"
                        labelPlacement="start"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </Paper>

              <Paper  item xs={12}>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">
                    Which path are you enrolled in?:
                  </FormLabel>
                  <RadioGroup
                    name="path"
                    value={this.state.path}
                    onChange={this.handleChange}
                  >
                    <FormControlLabel
                      control={<Radio color="primary" />}
                      value="javascript"
                      label="JavaScript"
                    />

                    <FormControlLabel
                      control={<Radio color="primary" />}
                      value="java"
                      label="Java"
                    />

                    <FormControlLabel
                      control={<Radio color="primary" />}
                      value="ruby"
                      label="Ruby"
                    />

                    <FormControlLabel
                      control={<Radio color="primary" />}
                      value="datascience"
                      label="Data Science"
                    />

                    <FormControlLabel
                      control={<Radio color="primary" />}
                      value="cybersecurity"
                      label="Cyber Security"
                    />
                  </RadioGroup>
                </FormControl>
              </Paper>

              <Paper item xs={12}>
                <TextField
                  id="filled-multiline-static"
                  label="Additional Information"
                  multiline
                  rows="8"
                  defaultValue=""
                  className={classes.textField}
                  style={{width:'97%'}}
                  margin="normal"
                  variant="filled"
                  onChange={this.handleChangeC("message")}
                />
              </Paper>

              <Paper item xs={12}>
                <br />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
                <br />
              </Paper>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(CareerForm);



  
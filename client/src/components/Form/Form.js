// import React, { Component } from 'react';

// import './Form.css';

// class Form extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state= {
//        fullname:"",
//        email:"",
//        path:"",
//        currentmodule:"",
//        relocate:"",
//        message:"",
//       };

//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//   }
  
//   handleChange(event) {
//       const target = event.target;
//       const value = target.type === "checkbox" ? target.checked : target.value;
//       const name = target.name;
  
//       this.setState({
//         [name]: value
//       });
//     }

//   handleSubmit(event){
//       event.preventDefault();
//       console.log(this.state);
//   }

//   render() {
//       return (
//           <div className="Form">
//           <header>
//               <div className="header">
//                <nav className="navbar">
//                  <div className="navbar-brand">
//                   <span className="navbar-item">Career Services Form</span>
//                  </div>
//                </nav>
//               </div>
//           </header>

//           <div className="container">
//           <div className="columns">
//             <div className="column is-9">
//               <form className="form" onSubmit={this.handleSubmit}>
//                 <div className="field">
//                   <label className="label">Full Name</label>
//                   <div className="control">   
//                     <input
//                       className="input"
//                       type="text"
//                       name="fullname"
//                       value={this.state.fullname}
//                       onChange={this.handleChange}
//                     />
//                   </div>
//                 </div>

//                  <div className="field">
//                 <label className="label">Email</label>
//                 <div className="control">
//                   <input
//                     className="input"
//                     type="email"
//                     name="emailaddress"
//                     value={this.state.email}
//                     onChange={this.handleChange}
//                   />
//                 </div>
//               </div>


//                <div className="field">
//                   <label className="label">Current Module</label>
//                    <div className="control">
//                     <input
//                      className="input"
//                      type="text"
//                      name="currentmodule"
//                      value={this.state.currentmodule}
//                      onChange={this.handleChange}
//                   />
//                 </div>
//               </div>


//             <div className="field">
//                   <label className="label">Which path are you enrolled in?</label>
//                   <div className="control">
//                     <div className="select">
//                       <select
//                         value={this.state.path}
//                         name="path"
//                         onChange={this.handleChange}
//                       >
//                         <option value="javascript">JavaScript</option>
//                         <option value="java">Java</option>
//                         <option value="c#">C#</option>
//                         <option value="cybersecurity">Cyber Security</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>



//              <div className="field">
//                   <div className="control">
//                     <label className="label">
//                       Are you willing to relocate?
//                     </label>
//                     <label className="radio">
//                       <input
//                         type="radio"
//                         name="relocate"
//                         onChange={this.handleChange}
//                         value="Yes"
//                         checked={this.state.relocate === "Yes"}
//                       />
//                       Yes
//                     </label>
//                     <label className="radio">
//                       <input
//                         type="radio"
//                         name="relocate"
//                         onChange={this.handleChange}
//                         value="No"
//                         checked={this.state.relocate === "No"}
//                       />
//                       No
//                     </label>
//                   </div>
//                 </div>

//               <div className="field">
//                 <div className="control">
//                   <input
//                     type="submit"
//                     value="Submit"
//                     className="button is-primary"
//                   />
//                 </div>
//               </div>
//             </form>
//             </div>

//             <div className="field">
//                   <label className="label">Message</label>
//                   <div className="control">
//                     <textarea
//                       className="textarea"
//                       name="message"
//                       value={this.state.message}
//                       onChange={this.handleChange}
//                     />
//                   </div>
//                 </div>

//             <div className="column is-3">
//               <pre>
//                 <code>
//                   <p>Full Name: {this.state.fullname}</p>
//                   <p>Email : {this.state.email}</p>
//                   <p>Path: {this.state.path}</p>
//                   <p>Current Module: {this.state.message}</p>
//                   <p>Willing To Relocate: {this.state.relocate}</p> 
//                 </code>
//               </pre>
//             </div>
//             </div>
//             </div>
//             </div>
//       );
//   }
//   }

// export default Form;

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

import './Form.css';

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
    marginRight: theme.spacing.unit
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


class Form extends React.Component {
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
      let temp = this.state.improvements;
      temp[[name]] = event.target.checked;
      this.setState({
        improvements: temp
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    this.tempState = this.state;
    console.log(this.tempState);
    this.handleOpenM();
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.modal.open}
              onClose={this.handleCloseM}
            >
              <div style={getModalStyle()} className={classes.paperr}>
                <Typography variant="title" id="modal-title">
                  Form successfully submitted :)
                </Typography>
                <Typography variant="subheading" id="simple-modal-description">
                  <strong>form:</strong> {JSON.stringify(this.state, null, 2)}
                  )}
                </Typography>
              </div>
            </Modal>

            <form autoComplete="off">
              <Paper className={classes.paper}>
                <TextField
                  id="filled-with-placeholder"
                  label="Name"
                  placeholder="Placeholder"
                  className={classes.textField}
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
                  margin="normal"
                  variant="filled"
                  onChange={this.handleChange}
                />
              </Paper>

              <Paper className={classes.paper}>
                <TextField
                  id="filled-with-placeholder"
                  label="Current Module"
                  placeholder="Placeholder"
                  className={classes.textField}
                  margin="normal"
                  variant="filled"
                  name="currentmodule"
                  onChange={this.handleChange}
                />
              </Paper>

              <Paper item xs={12}>
                <div>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">
                      Are you willing to relocate?
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="gender2"
                      className={classes.group}
                      value={this.state.recommend}
                      onChange={this.handleChangeR}
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

              <Paper item xs={12}>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">
                    Which path are you enrolled in?:
                  </FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.path.javascript}
                          onChange={this.handleChangeC("javascript")}
                          value="javascript"
                        />
                      }
                      label="JavaScript"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.path.java}
                          onChange={this.handleChangeC("java")}
                          value="java"
                        />
                      }
                      label="Java"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.path.ruby}
                          onChange={this.handleChangeC("ruby")}
                          value="ruby"
                        />
                      }
                      label="Ruby"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.path.datascience}
                          onChange={this.handleChangeC("datascience")}
                          value="datascience"
                        />
                      }
                      label="Data Science"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.path.cybersecurity}
                          onChange={this.handleChangeC("cybersecurity")}
                          value="cybersecurity"
                        />
                      }
                      label="Cyber Security"
                    />
                  </FormGroup>
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

export default withStyles(styles)(Form);


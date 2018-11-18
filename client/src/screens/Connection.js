import React from "react";
import { Grid, TextField, Paper, Button, Typography } from "@material-ui/core";
import fetch from "node-fetch";
import red from '@material-ui/core/colors/red';

const formStyles = {
  paddingTop: "15%"
};

const msgStyles = {
  height: "100px"
};


const Header={
  textAlign: "center",
  color:" #FF6363",
  textShadow: "0 2px 3px black"
};


export default class ContactForm extends React.Component {
  render() {
    return (
      <div id="contentContainer" style={{marginTop: 180, marginRight: 100, marginBottom: 300,marginLeft: 100,  }}>
        <Grid container spacing={16}>
          <Grid item xs={12} spacing={16}>
            <Typography variant="display2" gutterBottom>
              <h3 style={Header}>Git in Touch!</h3>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={16}>
          <Grid item xs={12} lg={12}>
            <Paper>
              <TextField id="name" type="text" placeholder="Name"/>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={16}>
          <Grid item xs={12} lg={12}>
            <Paper>
              <TextField id="email" type="text" placeholder="githirednow@gmail.com" />
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={16}>
          <Grid item xs={12} lg={12}>
            <Paper>
              <TextField id="msg" type="text" placeholder="message" />
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={16}>
          <Grid id="btnContainer" item lg={12}>
            <Button id="submitBtn" onClick={this.props.onSubmit}>
              Send Message
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const Confirmation = props => (
  <Grid container spacing={16}>
    <Grid item xs={12} lg={12}>
      <Typography display4>
        {"Thanks for the message, I'll get back to you soon!"}
      </Typography>
    </Grid>
  </Grid>
);

class ProcessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stage: 1 };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    React.unmountComponentAtNode(document.getElementById("contentContainer"));
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    fetch("/submit", {
      method: "POST",
      body: data
    });
  }

  render() {
    return <ContactForm onSubmit={this.handleSubmit} />;
  }
}

import React, { Component } from "react";
import fetch from 'isomorphic-fetch';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { Button, CardActions } from "@material-ui/core";

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import FormGroup from '@material-ui/core/FormGroup';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

import PermIdentity from '@material-ui/icons/PermIdentity';
import Email from '@material-ui/icons/Email';
import CloseIcon from '@material-ui/icons/Close'

const styles = (theme) => ({
  root: {
    paddingBottom: "20px",
    marginTop: "70px",
  },
  card: {
    margin: "5px",
    backgroundColor: "#E1F5FE",
    borderRadius: "8px"
  },
  header: {
    textAlign: "center",
    fontFamily: "'Amaranth', sans-serif",
  },
  flex: {
    display: 'flex',
    justifyContent: "center",
    margin: "10px",
    alignItems: "flex-end",
  },
  alignbutton: {
    flex: "1 0 auto",
  },
  margin: {
    margin: theme.spacing.unit,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      margin: 0,
    }
  },
  button: {
    boxShadow: "5px 5px 10px 1px",
    margin: "25px",
    [theme.breakpoints.down('md')]: {
      margin: "8px",
    }
  },
  icon: {
    fontSize: "40px",
    marginRight: "20px",
    [theme.breakpoints.down('md')]: {
      fontSize: "20px",
      marginRight: "10px",
    }
  },
  fixed: {
    borderRadius: 0,
    position: "fixed",
    bottom: "20px",
    right: "20px", 
    [theme.breakpoints.down('md')]: {
      left: 0,
      bottom: 0,
    }
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
  message: {
    color: "red",
  }
});

class Create extends Component {

  state = {
    name: "",
    email: "",
    username: "",
    github: "",
    message: "",
  }

  handleChange = (e, name) => {
    this.setState({[`${name}`]:e.target.value});
  }

  onSubmit = async () => {
    try {
      const url = `/api/create`;
      const { name, email, username, github } = this.state;

      this.setState({message: ''});
      /* 
      const res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ name, email, username, github }),
      });
      console.log(res); */

      fetch(url, {
        method:"POST",
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ name, email, username, github }),
      })
        .then(e => e.json())
        .then(e => {
          const {statusCode, error, message} = e;
          console.log(e);
          if(statusCode ===  400){
            this.setState({message:"Invalid Input by user. Please check your entered details"});
          }

          if (statusCode === 404) {
            this.setState({ message });
          }

          if(typeof statusCode === "undefined"){
            console.log(e);
            this.setState({ open: true, message });
          }
        })
        .catch(e => console.error(e));

    } catch (e) {
      console.error(e);
    }
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  onClick1 = (e) =>{
    e.preventDefault();
    window.location.href="/developers"
  }


  render() {

    const { classes } = this.props;
    const { open, message } = this.state;

    return (
      <div className={classes.root}>
        <Grid
          container
          justify="center"
          spacing={0}
          alignItems="center"
        >
          <Grid item xs={12} lg={5}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  variant="display3"
                  classes={{
                    root: classes.header
                  }}
                >
                  Submit Information
                </Typography>

                  <FormGroup>
                      <div className={classes.flex}>
                        <PermIdentity className={classes.icon} />
                        <TextField
                          className={classes.margin}
                          required
                          label="Name"
                          onChange={e => this.handleChange(e, 'name')}
                          id="mui-theme-provider-input"
                        />
                      </div>
                      <div className={classes.flex}>
                        <Email className={classes.icon} />
                        <TextField type="email"
                          className={classes.margin}
                          required
                          onChange={e => this.handleChange(e, 'email')}
                          label="Email"
                          id="mui-theme-provider-input"
                        />
                      </div>
                      <div className={classes.flex}>
                        <PermIdentity className={classes.icon} />
                        <TextField
                          className={classes.margin}
                          required
                          label="Username"
                          onChange={e => this.handleChange(e, 'username')}
                          id="mui-theme-provider-input"
                        />
                      </div>
                      <div className={classes.flex}>
                        <PermIdentity className={classes.icon} />
                        <TextField
                          className={classes.margin}
                          required
                          label="Github Handle"
                          onChange={e => this.handleChange(e, 'github')}
                          id="mui-theme-provider-input"
                        />
                      </div>
                  </FormGroup>
                  <div className={classes.message}>
                    {message ? message : null}
                  </div>
              </CardContent>
              <CardActions>
                <div className={classes.alignbutton} />
                <Button variant="raised" color="primary" onClick={this.onSubmit} >
                  Submit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Button variant="raised" className={classes.fixed} color="primary" onClick={e => this.onClick1(e)} >
          View Developers
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Data is Saved</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
              Close
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>

    );
  }
}

export default withStyles(styles)(Create);
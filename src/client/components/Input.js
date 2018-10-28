import React, { Component } from "react";

import { withStyles } from '@material-ui/core/styles';

import { Typography } from "@material-ui/core";


const styles = (theme) => ({
  root: {
    display:"flex",
  },
  text: {
    textAlign: "center",
    margin: "10px",
  },
  input: {
    width:"100%",
  },
});

class Input extends Component {
  render() {
    const { classes,onChange, value, placeholder, title } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="title" classes={{root:classes.text}}>
          {title}
        </Typography>
        <input
          className={classes.input}
          value={value}
          placeholder={placeholder ||"Input"}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Input);
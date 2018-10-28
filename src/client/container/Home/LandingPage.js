import React, { Component } from "react";

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
  root: {
    height: "100vh",
    backgroundImage: "linear-gradient(150deg,#53f 15%,#05d5ff 70%,#a6ffcb 94%)",
  },
  heading: {
    fontFamily: "'Amaranth', sans-serif",
    fontWeight: 'bold',
    position: "absolute",
    top: '.5em',
    color: "#fff",
    [theme.breakpoints.down('md')]: {
      fontSize: '30px',
      top: '4em',
    },
  },
  main: {
    fontFamily: "'Amaranth', sans-serif",
    display: "flex",
    color: "#fff",
    fontSize: "calc(18px + 28 * ((100vw - 320px) / 900))",
    paddingTop: "30vh",
    justifyContent: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down('md')]: {
      paddingTop: '9rem',
    },
  },
  button1: {
    padding: "10px",
    margin: theme.spacing.unit * 5,
    fontWeight: "bold",
    textShadow: "0 1px 3px rgba(36, 180, 126, .4)",
    color: "#fff",
    backgroundColor: "#3ecf8e",
    '&:hover': {
      backgroundColor: "#3ecf8e",
      transform: 'scale(1.09)',
    },
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing.unit,
    },

  },
  button2: {
    padding: "10px",
    margin: theme.spacing.unit * 5,
    color: "#7795f8",
    fontWeight: "bold",
    backgroundColor: "#fff",
    '&:hover': {
      backgroundColor: "#fff",
      transform: 'scale(1.09)',
    },
    [theme.breakpoints.down('md')]: {
      // padding: 0,
      margin: theme.spacing.unit,
    },

  },
  image: {
    position: 'absolute',
    top: '-120px',
    left: '-120px',
    [theme.breakpoints.down('md')]: {
      width: '140px',
      height: '140px',
      top: '-65px',
      left: '-65px',
    },
  }
});

const TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }

  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.main}>
          <Typography
            variant="display4"
            gutterBottom
            classes={{
              root: classes.heading
            }}
          >
            Developers Console
          </Typography>
          <h1 className="typewrite" data-period="2000" data-type='[ "Start a project", "Find a contributer" ]'>
            <span className="wrap"></span>
          </h1>
        </div>
        <div className={classes.buttons}>
          <Button variant="outlined" href="/create" color="primary" className={classes.button1}>
            Add Developer
          </Button>
          <Button variant="outlined" href="/developers" color="primary" className={classes.button2}>
            View Developers
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);

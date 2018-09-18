import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Developer from './index';

const styles = (theme) => ({
  root: {
    marginTop: "80px",
  },
});
class Developers extends Component {

  state = {
    developers:[]
  }

  componentWillMount = async () => {
    try {
      const url = `/api/developers`;
      /* const res = await fetch(url, {
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });
      const ans = await res;
      console.log(ans); */

      fetch(url, {
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      })
        .then(e => e.json())
        .then(e => {
          this.setState({developers:e.res});
        })
        .catch(e => console.log(e));


    } catch (e) {
      console.error(e);
    }
  }


  render() {
    const { classes } = this.props;
    const { developers } = this.state;

    return (
      <div className={classes.root}>
        <Grid container justify="center" spacing={8}>
        {
          developers.map((dev, i) => (
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3} key={i}>
              <Developer developer={dev} />
            </Grid>
          ))
        }
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Developers);
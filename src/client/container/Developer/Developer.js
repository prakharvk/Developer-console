import React, { Component } from "react";
import { withRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';


import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Loading from '../../components/Loading';

const styles = theme => ({
  root: {
    marginTop: "80px",
  },
  card: {
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Developer extends Component {

  state = {
    developer:[],
  }

  componentWillMount = async () => {
    try {
      const username = this.props.match.params.username;
      const url = `/api/developers/${username}`;

      //async await
     /*  const res = await fetch(url, {
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });

      console.log(res); */

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
          this.setState({developer: e.res});
        })
        .catch(e => console.log(e));

    } catch (e) {
      console.error(e);
    }
  }

  render() {

    const { classes } = this.props;
    const { developer } = this.state;

    if(typeof developer[0] === "undefined"){
      return <Loading/>
    }

    return (
      <div className={classes.root}>
        <Grid container justify="center" spacing={0}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                    {developer[0]["name"][0]}
                  </Avatar>
                }
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={developer[0]["name"]}
                subheader={developer[0]["username"]}
              />
              <CardMedia
                className={classes.media}
                image={developer[0]["avatar"]}
                title={developer[0]["name"]}
              />
              <CardContent>
                <Typography component="p">
                  {developer[0]["email"]}
                </Typography>
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Developer));
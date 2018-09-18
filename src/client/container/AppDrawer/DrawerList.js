import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};


class DrawerList extends Component{

  render(){
    const {classes} = this.props;
    return(
      <div className={classes.list}>
        <List>{"mailFolderListItems"}</List>
        <Divider />
        <List>{"otherMailFolderListItems"}</List>
      </div>
    );
  }
}

export default withStyles (styles) (DrawerList);
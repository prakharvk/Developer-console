import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import DrawerList from './DrawerList';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class AppDrawer extends React.Component {

  render() {
    const { openDrawer, closeDrawer, open } = this.props;
    console.log(open);

    return (
      <div>
        <SwipeableDrawer
          open={open}
          onOpen={openDrawer}
          onClose={closeDrawer}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={closeDrawer}
            onKeyDown={closeDrawer}
          >
            <DrawerList/>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppDrawer);

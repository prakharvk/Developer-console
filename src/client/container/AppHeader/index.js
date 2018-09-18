import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './styles';


class AppHeader extends Component {
    
    render(){
        const { classes, openDrawer } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" onClick={openDrawer} aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                        <Typography
                            variant="title"
                            color="inherit"
                            className={classes.flex}
                            onClick={() => {
                                window.location.href = '/';
                            }}
                        >
                            Developers Console
                         </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);

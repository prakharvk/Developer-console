import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';

import AppHeader from '../AppHeader/index';
import AppDrawer from '../AppDrawer/index';

const styles = (theme) => ({});

class AppLayout extends Component {
    state = {
        drawer: false,
        isHeader: true,
    }

    componentWillMount = () => {
        const { pathname } = this.props.location;
        if( pathname === "/"){
            this.setState({isHeader: false});
        }
    }
    
    openDrawer = () => {
        this.setState({drawer: true});
    }

    closeDrawer = () => {
        this.setState({drawer: false})
    }

    render(){
        const { classes, children } = this.props;
        const { drawer, isHeader } = this.state;

        return (
            <div className={classes.root}>
            {
                isHeader ? 
                <AppHeader openDrawer = {this.openDrawer} /> :
                 null
            }
            <AppDrawer 
              open={drawer} 
              openDrawer={this.openDrawer} 
              closeDrawer = {this.closeDrawer} 
            />
            {children}
            </div>
        );
    }
}

AppLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(AppLayout));

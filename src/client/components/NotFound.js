import React , {Component} from "react";

import { withStyles } from '@material-ui/core/styles';

import { Typography } from "@material-ui/core";


const styles = (theme) => ({
    main: {
        // backgroundColor: "red",
    },
    text: {
        textAlign:"center",
        margin:"30px",
        fontSize: "100px"
    },
    subtext : {
        textAlign:"center",
        fontSize:"50px"
    }
});

class NotFound extends Component{
    render(){
        const {classes} = this.props;

        return(
        <div className={classes.main}>
            <div className={classes.text}>
                <Typography variant="display4">
                    4 0 4
                </Typography>
            </div>
            <div className={classes.subtext}>
            <Typography variant="headline">
                    Page Not Found!
                </Typography>
            </div> 
        </div>)
    }
}

export default withStyles(styles)(NotFound);
import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        backgroundColor: '#F2F2F2',
        height: '400px',
        width: '100%',
        padding: '0rem 6.25rem',
    }
}))

const Footer = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>

        </div>
    )
}

export default Footer;
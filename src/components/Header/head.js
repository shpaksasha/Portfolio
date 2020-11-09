import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Icon, Toolbar, Typography} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root:{
        flexGrow: 1,
        width: '100%',
        display: 'flex',
        backgroundColor: '#eceff1',
        padding: '0rem 6.25rem',
        justifyContent: 'space-between',
        boxSizing:'border-box'
    },
    icon: {
        textDecoration: 'none',
    },
    eye: {
        position: 'relative',
        textDecoration: 'none'
    },
    see: {
        width: '100%',
        position: 'absolute',
        color: '#212121',
        fontSize: '12px',
        letterSpacing: '120%',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        lineHeight: '14px',
        paddingLeft: '5px',
    },
    links: {
        display:'flex',
    },
    title: {
        paddingLeft: '125px'
    },
    link: {
        position: 'relative',
        textDecoration: 'none',
        color: '#828282',
        fontSize: '16px',
        lineHeight: '24px',
        fontFamily: 'Roboto, sans-serif',
    },
    linkActive: {
        paddingBottom: '5px',
        borderBottom: '2px solid #37474f',
        color: '#37474f',
        fontSize: '16px',
        fontFamily: 'Roboto, sans-serif',
    },
}))


const AppMenu = () => {
    const classes = useStyles();
    return(
    <Toolbar className={classes.root}>
        <Typography className={classes.icon}>
            <Icon style={{height: '42px', width: '42px'}}>
                <NavLink className={classes.eye} to='/'>
                    <img src='/icon/Ellipse_1.svg'/>
                    <span className={classes.see}><b>I see</b> you</span>
                </NavLink>
            </Icon>
        </Typography>
        <div className={classes.links}>
        <Typography className={classes.title}>
            <NavLink exact={true} className={classes.link} activeClassName={classes.linkActive} to='/'>
                Home
            </NavLink>
        </Typography>
        <Typography className={classes.title}>
            <NavLink className={classes.link} activeClassName={classes.linkActive} to='/services'>
                Services
            </NavLink>
        </Typography>
        <Typography className={classes.title}>
            <NavLink className={classes.link} activeClassName={classes.linkActive} to='/technologies'>
                Technologies
            </NavLink>
        </Typography>
        <Typography className={classes.title}>
            <NavLink className={classes.link} activeClassName={classes.linkActive} to='/portfolio'>
                Portfolio
            </NavLink>
        </Typography>
        <Typography className={classes.title}>
            <NavLink className={classes.link} activeClassName={classes.linkActive} to='/about'>
                About us
            </NavLink>
        </Typography>
        <Typography className={classes.title}>
            <NavLink className={classes.link} activeClassName={classes.linkActive} to='/contacts'>
                Contacts
            </NavLink>
        </Typography>
        </div>
    </Toolbar>
    )
};

export default AppMenu;

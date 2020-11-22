import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Icon, Toolbar, Typography} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        display: 'flex',
        backgroundColor: '#eceff1',
        padding: '0rem 6.25rem',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        position: 'sticky',
        top: 0,
        zIndex: 1,
    },

    shadow: {
        boxShadow: '0px 4px 11px 2px rgba(0,0,0,0.25)'
    },

    icon: {
        textDecoration: 'none',
    },
    eye: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },
    see: {
        width: '100%',
        color: '#212121',
        fontSize: '12px',
        letterSpacing: '120%',
        fontFamily: 'Montserrat',
        paddingLeft: '10px',
    },
    links: {
        display: 'flex',
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

    const [isOffset, setIsOffset] = useState(window.pageYOffset);

    const scrollListener = () => {
        setIsOffset(window.pageYOffset);
        console.log(isOffset);
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollListener);
        return () => {
            window.removeEventListener("scroll", scrollListener);
        }
    }, [scrollListener])

    const classes = useStyles();


    return (
        <Toolbar className={`${classes.root} ${isOffset > 0 ? classes.shadow : null}`}>
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

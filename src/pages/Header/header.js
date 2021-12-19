import React, {useEffect, useState} from 'react';
import {AppBar, Fab, Hidden, Icon, Menu, Toolbar, Typography} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {useStyles} from './header.styles';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


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


    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpened, setOpened] = useState(false);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
        setOpened(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpened(false);
    };

    const classes = useStyles();

    const NavbarContent = (
        <Toolbar className={`${classes.root} ${isOffset > 0 ? classes.shadow : null}`}>
            <Hidden xsDown>
                <Typography className={classes.icon}>
                    <Icon className={{height: '42px', width: '42px'}}>
                        <NavLink className={classes.eye} to='/'>
                            <img src='/icon/ellipse.svg' alt="Logo"/>
                            <span className={classes.see}><b>I see</b> you</span>
                        </NavLink>
                    </Icon>
                </Typography>
            </Hidden>
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
        </Toolbar>
    )

    return (
        <AppBar className={classes.appbar}>
            <Hidden smUp>
                <Fab onClick={handleClick} aria-controls='simple-menu' aria-haspopup='true' style={{
                    color: '#ffffff',
                    margin: 0,
                    top: 'auto',
                    right: 30,
                    bottom: 30,
                    left: 'auto',
                    position: 'fixed',
                    background: '#29AAE1'
                }}>
                    {isOpened ? <CloseIcon/> : <MenuIcon/>}
                </Fab>
                <Menu
                    PopoverClasses={{paper: classes.menu}}
                    id='simple-menu'
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClick={handleClose}
                >
                    {NavbarContent}
                </Menu>
            </Hidden>
            <Hidden xsDown>
                {NavbarContent}
            </Hidden>
        </AppBar>
    )
};

export default AppMenu;

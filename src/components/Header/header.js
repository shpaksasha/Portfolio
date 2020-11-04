import React from 'react'
import PropTypes from 'prop-types';
import {Icon, Toolbar, Typography, Hidden, Fab, Menu, useScrollTrigger} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    root:{
        flexGrow: 1,
        backgroundColor: '#eceff1',
        // display: 'flex',
        // padding: '0rem 6.25rem',
    },
    appbar: {
            backgroundColor:'#eceff1',
            padding:'0 12.5% 0 0 ',
    },
    icon: {
        paddingRight: '150px',
        textDecoration: 'none',
        justifyItems: 'center',
    },
    title: {
        paddingRight: '55px'
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
        paddingLeft: '10px',
        '&:b': {
            display: 'flex',
            alignItems: 'center',
        }
    },
    lin: {

        position: 'relative',
        textDecoration: 'none'
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
    menu:{
        width:'205px',
        background:'black',
        margin: '0px',
        bottom:'90px',
        right:'32px',
        top:'unset !important',
        left:'unset !important'
    }
}))


const AppBar = (props) => {
    const classes = useStyles();
    const [anchor, setAnchor] = React.useState(null);
    const [isOpened, setOpened] = React.useState(false);

    const handleClick = event => {
        setAnchor(event.currentTarget);
        setOpened(true);
    };

    const handleClose = () => {
        setAnchor(null);
        setOpened(false);
    };
    function ElevationScroll(props) {
        const { children, window } = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
            target: window ? window() : undefined,
        });

        return React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
        });
    }

    ElevationScroll.propTypes = {
        children: PropTypes.element.isRequired,
        /**
         * Injected by the documentation to work in an iframe.
         * You won't need it on your project.
         */
        window: PropTypes.func,
    };

    const Header = (
        <div className={classes.root}>
            <Toolbar>
                <Typography className={classes.icon}>
                    <Icon style={{padding: '0 2.50rem', height: '42px', width: '42px'}}>
                        <NavLink className={classes.lin} to='/'>
                            <img src='/icon/Ellipse_1.svg'/>
                            <span className={classes.see}><b>I see</b> you</span>
                        </NavLink>
                    </Icon>
                </Typography>
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
        </div>
    )
    return (
        <div className={classes.root}>
            <ElevationScroll {...props}>
                <AppBar className = {classes.appbar} position="fixed">
                    <Hidden mdUp>
                        <Fab onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true" style={{margin:0,top:'auto',right:30,bottom:30,left:'auto',position:'fixed',background:'#FDD835'}}>
                            {isOpened ? <CloseIcon/> : <MenuIcon/>}
                        </Fab>
                        <Menu
                            classes={{paper:classes.menu}}
                            id="simple-menu"
                            anchor={anchor}
                            keepMounted
                            open={Boolean(anchor)}
                            onClick={handleClose}
                        >
                            {Header}
                        </Menu>
                    </Hidden>
                    <Hidden smDown>
                        {Header}
                    </Hidden>
                </AppBar>
            </ElevationScroll>
        </div>
    )
};


export default AppBar;
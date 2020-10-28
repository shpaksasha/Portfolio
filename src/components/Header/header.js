import React from 'react'
import {Toolbar, Icon, Typography} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
    bar: {
        flexGrow: 1,
        display:'flex',
        margin:'0',
        padding:'0',
        backgroundColor: '#eceff1',
    },
    icon: {
        paddingRight: '150px',
        textDecoration: 'none',
        justifyItems:'center',
    },
    title: {
      paddingRight: '55px'
    },
    see: {
        width:'100%',
        position: 'absolute',
        color:'#212121',
        fontSize:'12px',
        letterSpacing: '120%',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        lineHeight: '14px',
        paddingLeft: '10px',
        '&:b':{
            display:'flex',
            alignItems:'center',
        }
    },
lin:{

        position:'relative',
        textDecoration: 'none'
},
    link:{
        position:'relative',
        textDecoration:'none',
        color: '#828282',
        fontSize:'16px',
        lineHeight: '24px',
        fontFamily:'Roboto, sans-serif',
    },
    linkActive:{
        paddingBottom:'5px',
        borderBottom:'2px solid #37474f',
        color:'#37474f',
        fontSize:'16px',
        fontFamily:'Roboto, sans-serif',
    }
}))



const AppBar = () => {
    const classes = useStyles();
    return(
        <Toolbar className={classes.bar}>
            <Typography className={classes.icon}>
            <Icon style={{padding:'0 2.50rem',height:'42px',width:'42px'}}>
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
    )
};


export default AppBar;
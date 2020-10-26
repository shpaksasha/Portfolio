import React from 'react'
import {Toolbar, Icon, Typography} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import eye from '../../../public/icon/Ellipse_1.svg';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({

}))



const AppBar = () => {
    const classes = useStyles();
    return(
        <Toolbar>
            <Icon style={{padding:'0 2.25rem',height:'30px',width:'30px'}}>
                <Typography>
                <NavLink to='/'>
                    <img src={eye}/>
                </NavLink>
                    I see you
                </Typography>
            </Icon>
            <Typography className={classes.title}>
                <NavLink className={classes.link} exact={true} activeClassName={classes.linkActive} to='/'>
                    About product
                </NavLink>
            </Typography>
            <Typography className={classes.title}>
                <NavLink className={classes.link} activeClassName={classes.linkActive} to='/services'>
                    Services
                </NavLink>
            </Typography>
            <Typography className={classes.title}>
                <NavLink className={classes.link} activeClassName={classes.linkActive} to='/news'>
                    Subscribe to news
                </NavLink>
            </Typography>
            <Typography className={classes.title}>
                <NavLink className={classes.link} activeClassName={classes.linkActive} to='/news'>
                    Subscribe to news
                </NavLink>
            </Typography>
            <Typography className={classes.title}>
                <NavLink className={classes.link} activeClassName={classes.linkActive} to='/news'>
                    Subscribe to news
                </NavLink>
            </Typography>
            <Typography className={classes.title}>
                <NavLink className={classes.link} activeClassName={classes.linkActive} to='/news'>
                    Subscribe to news
                </NavLink>
            </Typography>
        </Toolbar>

    )
};


export default AppBar;
import React from 'react';
import {Grid, Hidden, Typography} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {useStyles} from './footer.styles';


const Footer = () => {
    const classes = useStyles();
    return (
        <Hidden xsDown>
            <div className={classes.root}>
                <Grid container md={12} sm={12} direction='row' justify='flex-start'>
                    <Grid item md={3} sm={6}>
                        <Typography className={classes.caption}>Our work</Typography>
                        <Typography className={classes.text}>
                            <NavLink exact className={classes.link} activeClassName={classes.linkActive}
                                     to='/'>Home</NavLink>
                        </Typography>
                        <Typography className={classes.text}>
                            <NavLink className={classes.link} activeClassName={classes.linkActive}
                                     to='/services'>Services</NavLink>
                        </Typography>
                        <Typography className={classes.text}>
                            <NavLink className={classes.link} activeClassName={classes.linkActive}
                                     to='/technologies'>Technologies</NavLink>
                        </Typography>
                        <Typography className={classes.text}>
                            <NavLink className={classes.link} activeClassName={classes.linkActive}
                                     to='/portfolio'>Portfolio</NavLink></Typography>
                    </Grid>

                    <Grid item md={3} sm={6}>
                        <Typography className={classes.caption}>About company</Typography>
                        <Typography className={classes.text}>
                            <NavLink exact className={classes.link} activeClassName={classes.linkActive} to='/about'>About
                                us</NavLink></Typography>

                        <Typography className={classes.text}>
                            <NavLink className={classes.link} activeClassName={classes.linkActive}
                                     to="/contacts">Contacts</NavLink></Typography>
                    </Grid>
                    <Hidden smDown>
                        <Grid item md={3}>
                            <Typography className={classes.caption}>Contact us</Typography>

                            <Typography className={classes.text}>
                                <NavLink className={classes.link} to='#'>Contact
                                    us</NavLink>
                            </Typography>
                        </Grid>

                        <Grid item md={3}>
                            <Typography className={classes.caption}>Career</Typography>
                            <Typography className={classes.text}>
                                <NavLink className={classes.link} to='#'>Open
                                    vacancies</NavLink>
                            </Typography>
                            <Typography className={classes.text}>
                                <NavLink className={classes.link} to='#'>Our motto</NavLink>
                            </Typography>
                        </Grid>
                    </Hidden>
                </Grid>
            </div>
        </Hidden>
    )
};

export default Footer;

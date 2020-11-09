import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        backgroundColor: '#F2F2F2',
        height: '260px',
        width: '100%',
        padding: '0rem 6.25rem',
        boxSizing:'border-box'
    },
    caption: {
        fontWeight:'bold',
        color: '#151145',
        fontSize: '18px',
        lineHeight: '150%',
        fontFamily:'Roboto, sans-serif',
        paddingBottom: '18px'
    },
    text: {
        paddingBottom: '18px'
    },
    link: {
        color: '#828282',
        fontSize: '16px',
        lineHeight: '150%',
        fontFamily: 'Poppins',
        textDecoration: 'none',
    },
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container md={12} direction="row" justify="flex-start">
                <Grid item md={3}>
                    <Typography className={classes.caption}>Our work</Typography>
                    <Typography className={classes.text}>
                        <NavLink exact className={classes.link} activeClassName={classes.linkActive}
                                 to="/">Home</NavLink>
                    </Typography>
                    <Typography className={classes.text}>
                        <NavLink className={classes.link} activeClassName={classes.linkActive}
                                 to="/services">Services</NavLink>
                    </Typography>
                    <Typography className={classes.text}>
                        <NavLink className={classes.link} activeClassName={classes.linkActive}
                                 to="/technologies">Technologies</NavLink>
                    </Typography>
                    <Typography className={classes.text}>
                        <NavLink className={classes.link} activeClassName={classes.linkActive}
                                 to="/portfolio">Portfolio</NavLink></Typography>
                </Grid>

                <Grid item md={3}>
                    <Typography className={classes.caption}>About company</Typography>
                    <Typography className={classes.text}>
                        <NavLink exact className={classes.link} activeClassName={classes.linkActive} to="/about">About
                            us</NavLink></Typography>

                    <Typography className={classes.text}>
                        <NavLink className={classes.link} activeClassName={classes.linkActive}
                                 to="/contacts">Contacts</NavLink></Typography>
                </Grid>

                <Grid item md={3}>
                    <Typography className={classes.caption}>Contact us</Typography>

                    <Typography className={classes.text}>
                        <NavLink className={classes.link} activeClassName={classes.linkActive} to="/contacts">Contact
                            us</NavLink>
                    </Typography>
                </Grid>

                <Grid item md={3}>
                    <Typography className={classes.caption}>Career</Typography>
                    <Typography className={classes.text}>
                        <NavLink className={classes.link} activeClassName={classes.linkActive} to="">Open
                            vacancies</NavLink>
                    </Typography>
                    <Typography className={classes.text}>
                        <NavLink className={classes.link} activeClassName={classes.linkActive} to="">Our motto</NavLink>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;
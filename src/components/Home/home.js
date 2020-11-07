import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Grid, Typography} from '@material-ui/core';
import Cards from './cards';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        padding: '3rem 6.25rem',
        margin: '0rem',
        alignItems: 'center',
    },
    caption: {
        marginTop: ' 40px',
        fontFamily: 'Regular',
        fontWeight: 'bold',
        fontSize: '50px',
        lineHeight: '120%',
        color: '#151145'
    },
    description: {
        marginTop: '24px',
        fontFamily: 'Poppins',
        fontSize: '16px',
        lineHeight: '150%',
        color: '#828282'
    },
    button: {
        fontWeight: 'bold',
        fontSize: '13px',
        color: '#FFFFFF',
        fontFamily: 'Regular',
        marginTop: '41px',
        background: '#29AAE1',
        boxShadow: '0px 2px 4px',
        borderRadius: '3px',
        textTransform: 'none',
        padding: '14px 30px',
        letterSpacing: '0.05em',
        '&:hover': {
            color: '#29AAE1',
            background: 'rgba(150, 224, 255, 0.80)',
            border: '2px solid #29AAE1',
            boxSizing: 'border-box'
        }
    },
    heroImage: {
        width: '100%',
        height: 'auto',
        maxWidth: '610px',
        paddingLeft: '32px'
    }
}))

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container md={12} spacing={0}>
                <Grid item md={6}>
                    <Typography className={classes.caption}>
                        Experts in making enterprise solutions
                    </Typography>
                    <Typography className={classes.description}>
                        Our clients receive all in building services from analysis of their critical problems to
                        thinking up solutions and their implementation.
                    </Typography>
                    <Button variant='contained' className={classes.button}>
                        Create something together !
                    </Button>
                </Grid>
                <Grid item md={6}>
                    <img className={classes.heroImage} src={'/images/pexels.jpeg'}/>
                </Grid>
                <Cards/>
            </Grid>
        </div>
    )
};


export default Home;
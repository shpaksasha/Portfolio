import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography, Button} from '@material-ui/core';


const useStyles = makeStyles(theme =>({
    root: {
        flexGrow: 1,
        display: 'flex',
        padding: '3rem 6.25rem',
        margin: '0rem',
        alignItems: 'center',
    },
    caption: {
fontFamily: 'Regular',
        fontWeight:'bold',
        fontSize:'50px',
        lineHeight: '120%',
        color: '#151145'
    },
    description: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        lineHeight: '150%',
        color: '#828282'
    },
    heroImage: {
        width: '100%',
        height: 'auto',
        maxWidth: '600px'
    },
    button: {
        background: '#29AAE1',
        boxShadow: '0px 2px 10px',
        borderRadius: '4px',
        textTransform: 'none',
        padding: '12px 28px',
        '&:hover': {
            color: '#9e9e9e',
            background:'#ffd54f'
        }
    },
}))

const Home = () => {
    const classes = useStyles();
    return(
       <div className={classes.root}>
           <Grid container md={12} spacing={0}>
               <Grid item md={6}>
                   <Typography className={classes.caption}>
                       Experts in making enterprise solutions
                   </Typography>
                   <Typography className={classes.description}>
                       Our clients receive all in building services from analysis of their critical problems to thinking up solutions and their implementation.
                   </Typography>
                   <Button variant='contained' className={classes.button}>
                       Create something together !
                   </Button>
               </Grid>
               <Grid item md={6}>
                   <img className={classes.heroImage} src={'/images/pexels.jpeg'}/>
               </Grid>
           </Grid>
       </div>
    )
};


export default Home;
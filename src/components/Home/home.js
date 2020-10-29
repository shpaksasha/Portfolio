import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography, Button,Card, CardContent, CardActions} from '@material-ui/core';


const useStyles = makeStyles(theme =>({
    root: {
        flexGrow: 1,
        display: 'flex',
        padding: '3rem 6.25rem',
        margin: '0rem',
        alignItems: 'center',
    },
    caption: {
        marginTop:' 40px',
        fontFamily: 'Regular',
        fontWeight:'bold',
        fontSize:'50px',
        lineHeight: '120%',
        color: '#151145'
    },
    description: {
        marginTop:'24px',
        fontFamily: 'Poppins',
        fontSize: '16px',
        lineHeight: '150%',
        color: '#828282'
    },
    button: {
        marginTop: '41px',
        background: '#29AAE1',
        boxShadow: '0px 2px 10px',
        borderRadius: '4px',
        textTransform: 'none',
        padding: '14px 30px',
        '&:hover': {
            color: '#9e9e9e',
            background: '#ffd54f'
        }
    },
    heroImage: {
        width: '100%',
        height: 'auto',
        maxWidth: '600px'
    },
    services: {
        fontWeight: 'bold',
        fontFamily: 'Regular',
        fontSize: '35px',
        lineHeight: '130%',
        color: '#151145'
    },
    block: {
        width: '280px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
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

               <Grid item md={6}>
                   <Typography className={classes.services}>Services we provide</Typography>
                   <Card className={classes.block}>
                       <CardContent>
                           <object type="image/svg+xml" data="/icon/folder.svg" width="60" height="60"/>
                           <Typography className={classes.title} color="textSecondary" gutterBottom>
                               Word of the Day
                           </Typography>
                           <Typography variant="h5" component="h2">
                           </Typography>
                           <Typography className={classes.pos} color="textSecondary">
                               adjective
                           </Typography>
                           <Typography variant="body2" component="p">
                               well meaning and kindly.
                               <br />
                               {'"a benevolent smile"'}
                           </Typography>
                       </CardContent>
                       <CardActions>
                           <Button size="small">Learn More</Button>
                       </CardActions>
                   </Card>
               </Grid>
           </Grid>


       </div>
    )
};


export default Home;
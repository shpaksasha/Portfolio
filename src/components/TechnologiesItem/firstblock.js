import React from 'react';
import {useStyles} from './firstblock.styles';
import {Grid, Typography, Button} from '@material-ui/core';



const First = () => {
    const classes = useStyles();
    return(
       <Grid item md={12}>
           <Grid container md={12} sm={12}>
               <Grid item md={6} sm={12}>
                   <Typography className={classes.caption}>Requirements Analysis</Typography>
                   <Typography className={classes.description}>We strive to be an industry leader in software
                       development. Our expertise in requirements analysis is one of the cornerstones of our
                       ability to achieve that goal.
                       <p>Simply put, we’re rigorous in our approach and determined to ensure an accurate build,
                           whether we’re developing an app for your in-house team, a consumer-facing website or
                           something else completely.</p></Typography>
                   <Button variant='contained' className={classes.button}>
                       Start your project
                   </Button>
               </Grid>
               <Grid item md={6} sm={12}>
                   <object className={classes.images} type='image/svg+xml' data='/images/technologies_1.svg'/>
               </Grid>
           </Grid>
       </Grid>
    )
};


export default First;

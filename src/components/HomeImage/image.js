import React from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import {useStyles} from './image.styles';


const ItemBlock = () => {
    const classes = useStyles();

    return (
        <Grid item md={12} sm={12}>
            <Grid container md={12} spacing={0} sm={12} className={classes.smBlock}>
                <Grid item md={6} sm={12}>
                    <Typography className={classes.caption}>
                        Experts in making enterprise solutions
                    </Typography>
                    <Typography className={classes.description}>
                        Our clients receive all in building services from analysis of their critical problems to
                        thinking up solutions and their implementation.
                    </Typography>
                    <Button variant='contained' classes={{root: classes.button}}>
                        Create something together !
                    </Button>
                </Grid>
                <Grid item md={6} sm={12}>
                    <img className={classes.heroImage} src={'/images/business.jpeg'}/>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default ItemBlock;

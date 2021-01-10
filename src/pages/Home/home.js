import React from 'react';
import {useStyles} from './home.styles';
import {Grid} from '@material-ui/core';
import ImageBlock from '../../components/HomeImage/image';
import Services from '../../components/Services/services';


const Home = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid conteiner md={12} spacing={0} sm={12} xs={12}>
                <ImageBlock/>
                <Services/>
            </Grid>
        </div>
    )
};


export default Home;

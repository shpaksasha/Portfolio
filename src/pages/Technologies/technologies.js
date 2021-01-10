import React from 'react';
import {Grid} from '@material-ui/core';
import {useStyles} from './technologies.styles';
import First from '../../components/TechnologiesFirst/first';
import Second from '../../components/TechnologiesSecond/second';


const Technologies = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid conteiner md={12} sm={12} spacing={0}>
                <First/>
                <Second/>
            </Grid>
        </div>
    )
};

export default Technologies;

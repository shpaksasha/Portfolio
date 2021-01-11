import React from 'react';
import {useStyles} from './digital.styles';
import {Button, Grid, Typography, Hidden} from '@material-ui/core';


const Digital = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction='row' spacing={0} md={12} sm={12}>
                <Grid container md={12} sm={12}>
                    <Grid item md={6} sm={12}>
                        <Typography className={classes.caption}>Digital analysis</Typography>
                        <Typography className={classes.description}>Digital analytics encompasses the collection,
                            measurement, analysis, visualisation and interpretation of digital data illustrating user
                            behaviour on websites, mobile sites and mobile applications.</Typography>
                        <Typography className={classes.descriptionTwo}>Why use Digital Analytics to understand Customer
                            Behavior? Digital data are not just a bunch of numbers. They are the digital footprints of
                            your customers.</Typography>
                        <Button variant='contained' className={classes.button}>
                            Start your project
                        </Button>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <object className={classes.images} type='image/svg+xml' data='/images/digital_1.svg'
                                width='100%' height='auto'/>
                    </Grid>
                </Grid>


                <Grid conteiner md={12} sm={12} className={classes.two}>
                    <Hidden smDown>
                        <Grid item md={6} sm={12}>
                            <object className={classes.images} style={{paddingRight: '20px'}} type='image/svg+xml' data='/images/digital_2.svg'
                                    width='100%' height='auto'/>
                        </Grid>
                    </Hidden>
                    <Grid item md={6} sm={12}>
                        <Typography className={classes.captionItem}>Requirements Analysis</Typography>
                        <Typography className={classes.description}>You can think of requirements analysis as due
                            diligence in some ways. It’s the name given to the collection of processes and techniques
                            used to ensure that whatever is being developed matches user expectations and stakeholder
                            requirements.</Typography>
                        <Button variant='contained' className={classes.more}>
                            Learn more
                        </Button>
                    </Grid>
                    <Hidden mdUp>
                        <Grid item md={6} sm={12}>
                            <object className={classes.images} type='image/svg+xml' data='/images/digital_2.svg'
                                    width='100%' height='auto'/>
                        </Grid>
                    </Hidden>
                </Grid>


                <Grid container md={12} sm={12} className={classes.three}>
                    <Grid item md={6} sm={12}>
                        <Typography className={classes.captionItem}>Agile Innovation Packages</Typography>
                        <Typography className={classes.description}>Our Agile Innovation Packages enable you to
                            continually improve your website and online software systems with monthly packages of hours
                            that can be used for
                            strategy consulting, design, development, testing and performance analysis.</Typography>
                        <Button variant='contained' className={classes.more}>
                            Learn more
                        </Button>

                    </Grid>
                    <Grid item md={6} sm={12}>
                        <object className={classes.images} type='image/svg+xml' data='/images/digital_3.svg'
                                width='100%' height='auto'/>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
};

export default Digital;

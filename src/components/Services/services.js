import React from 'react';
import {Button, Card, CardActions, CardContent, Grid, Hidden, Typography} from '@material-ui/core';
import {useStyles} from './services.styles';


const Services = () => {
    const classes = useStyles();
    return (
        <Grid item md={12} sm={12} xs={12}>
            <Grid container md={12} sm={12} xs={12}>
                <Hidden smDown>
                    <Grid item md={3}>
                        <Typography className={classes.services}>Services we provide</Typography>
                        <Card className={classes.block}>
                            <CardContent>
                                <object type="image/svg+xml" data='/icon/folder.svg' width='44' height='44'/>
                                <Typography className={classes.cardTitle}>
                                    Digital strategy
                                </Typography>
                                <Typography className={classes.cardDescription}>
                                    A digital strategy is a blueprint of how you will build out your business`s online
                                    objectives.
                                </Typography>
                                <Typography className={classes.list}>
                                    <ul>
                                        <li>Requirements Analysis</li>
                                        <li>Agile Innovation Packages</li>
                                        <li>Digital Strategy Consulting</li>
                                    </ul>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button className={classes.learn}>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Hidden>
                <Grid items md={9} sm={12} xs={12}>
                    <Grid container sm={12} xs={12} className={classes.cardBlock6}>
                        <Grid item md={4} sm={6} xs={12} className={classes.infoBlockTop}>
                            <object type="image/svg+xml" data='/icon/web.svg' width='44' height='44'/>
                            <Typography className={classes.cardTitle}>Web design</Typography>
                            <Typography className={classes.cardDescription}>Let us design your product from hand
                                sketches
                                and UX wireframes to visual design and interactions.</Typography>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12} className={classes.infoBlockTop}>
                            <object type="image/svg+xml" data='/icon/comp.svg' width='44' height='44'/>
                            <Typography className={classes.cardTitle}>Web development</Typography>
                            <Typography className={classes.cardDescription}>We create web products of all types: from
                                landing pages to web apps, from custom to WordPress.</Typography>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12} className={classes.infoBlockTop}>
                            <object type="image/svg+xml" data='/icon/tel.svg' width='44' height='44'/>
                            <Typography className={classes.cardTitle}>Mobile development</Typography>
                            <Typography className={classes.cardDescription}>We use only latest technologies while
                                developing
                                mobile products for iOS and Android.</Typography>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12} className={classes.infoBlockBottom}>
                            <object type="image/svg+xml" data='/icon/services.svg' width='44' height='44'/>
                            <Typography className={classes.cardTitle}>Managed cloud services</Typography>
                            <Typography className={classes.cardDescription}>Share and access resources, including
                                databases,
                                hardware and software tools, across a remote network via multiple servers in another
                                location. </Typography>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12} className={classes.infoBlockBottom}>
                            <object type="image/svg+xml" data='/icon/desing.svg' width='44' height='44'/>
                            <Typography className={classes.cardTitle}>Graphic design</Typography>
                            <Typography className={classes.cardDescription}>Problem-solving through the use of
                                typography,
                                photography, and illustration.</Typography>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12} className={classes.infoBlockBottom}>
                            <object type="image/svg+xml" data='/icon/other.svg' width='44' height='44'/>
                            <Typography className={classes.cardTitle}>Other services</Typography>
                            <Typography className={classes.cardDescription}>Learn more about all services we
                                provide.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Services;

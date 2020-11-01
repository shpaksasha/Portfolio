import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Card, CardActions, CardContent, Grid, Typography} from '@material-ui/core';


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
        fontFamily: 'Regular',
        marginTop: '41px',
        background: '#29AAE1',
        boxShadow: '0px 2px 4px',
        borderRadius: '3px',
        textTransform: 'none',
        padding: '14px 30px',
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
    },
    services: {
        width: '335px',
        fontWeight: 'bold',
        fontFamily: 'Regular',
        fontSize: '35px',
        lineHeight: '120%',
        wordSpacing: '2px',
        color: '#151145',
        marginBottom: '42px',
        marginTop: '60px'
    },
    block: {
        position: 'relative',
        width: '268px',
        height: '425px',
        boxShadow: '3px 4px 12px',
    },
    cardTitle: {
        color: '#29AAE1',
        fontSize: '22px',
        lineHeight: '120%',
        fontFamily: 'Regular',
        marginBottom: '16px',
        marginTop: '10px'
    },
    cardDescription: {
        color: '#828282',
        fontSize: '14px',
        lineHeight: '150%',
        fontFamily: 'Poppins',
        marginBottom: '21px',
    },
    list: {
        color: '#333333',
        fontSize: '13px',
        lineHeight: '180%',
        fontFamily: 'Dancing Script, cursive',
        display: 'block',
        marginBottom: '62px',
        '& ul': {
            paddingLeft: 15,
        },
    },
    learn: {
        fontFamily: 'Regular',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0)',
        background: '#29AAE1',
        boxShadow: '0px 2px 4px',
        borderRadius: '3px',
        textTransform: 'none',
        padding: '9px 18px',
        '&:hover': {
            color: '#29AAE1',
            background: 'rgba(150, 224, 255, 0.80)',
            border: '2px solid #29AAE1',
            boxSizing: 'border-box'
        }
    },
    infoBlock1: {
        marginTop: '156px',
        maxWidth: '270px',
        margin: '0 auto',
    },
    infoBlock2: {

        maxWidth: '270px',
        margin: '0 auto',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
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



                <Grid container md={12} spacing={1}>
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

                <Grid items md={9}>
                    <Grid container={12}>
                        <Grid item md={4} className={classes.infoBlock1}>
                            <object type="image/svg+xml" data='/icon/web.svg' width='44' height='44'/>
                            <Typography className={classes.cardTitle}>Web design</Typography>
                            <Typography className={classes.cardDescription}>Let us design your product from hand sketches and UX wireframes to visual design and interactions.</Typography>
                        </Grid>
                        <Grid item md={4} className={classes.infoBlock1}>
                            <object type="image/svg+xml" data='/icon/comp.svg' width='44' height='44'/>
                            <Typography className={classes.cardTitle}>Web development</Typography>
                            <Typography className={classes.cardDescription}>We create web products of all types: from landing pages to web apps, from custom to WordPress.</Typography>
                        </Grid>
                        <Grid item md={4} className={classes.infoBlock1}>
                            <object type="image/svg+xml" data='/icon/tel.svg' width='44' height='44'/>
                            <Typography className={classes.cardTitle}>Mobile development</Typography>
                            <Typography className={classes.cardDescription}>We use only latest technologies while developing mobile products for iOS and Android.</Typography>
                        </Grid>
                        <Grid item md={4} className={classes.infoBlock2}>
                            <object type="image/svg+xml" data='/icon/tel.svg' width='44' height='44'/>
                            <Typography className={classes.cardTitle}>Mobile development</Typography>
                            <Typography className={classes.cardDescription}>We use only latest technologies while developing mobile products for iOS and Android.</Typography>
                        </Grid>
                        <Grid item md={4} className={classes.infoBlock2}>
                            <object type="image/svg+xml" data='/icon/tel.svg' width='44' height='44'/>
                            <Typography className={classes.cardTitle}>Mobile development</Typography>
                            <Typography className={classes.cardDescription}>We use only latest technologies while developing mobile products for iOS and Android.</Typography>
                        </Grid>
                        <Grid item md={4} className={classes.infoBlock2}>
                            <object type="image/svg+xml" data='/icon/tel.svg' width='44' height='44'/>
                            <Typography className={classes.cardTitle}>Mobile development</Typography>
                            <Typography className={classes.cardDescription}>We use only latest technologies while developing mobile products for iOS and Android.</Typography>
                        </Grid>
                    </Grid>
                </Grid>


                </Grid>



            </Grid>
        </div>
    )
};


export default Home;
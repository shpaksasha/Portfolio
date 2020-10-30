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
        maxWidth: '600px'
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
    digital: {
        color: '#29AAE1',
        fontSize: '22px',
        lineHeight: '120%',
        fontFamily: 'Regular',
        marginBottom: '16px',
        marginTop: '10px'
    },
    online: {
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

                <Grid item md={6}>
                    <Typography className={classes.services}>Services we provide</Typography>
                    <Card className={classes.block}>
                        <CardContent>
                            <object type="image/svg+xml" data="/icon/folder.svg" width="44" height="44"/>
                            <Typography className={classes.digital}>
                                Digital strategy
                            </Typography>
                            <Typography className={classes.online}>
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
            </Grid>


        </div>
    )
};


export default Home;
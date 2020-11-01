import React from 'react';
import {Button, Card, CardActions, CardContent, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
        '&:hover': {
            transform: 'translateX(2px)',
        }
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
    cardBlock6: {
        marginTop: '158px',
    },
    infoBlock: {
        maxWidth: '270px',
        margin: '0 auto',
        paddingBottom: '52px'
    },
}))

const Cards = () => {
    const classes = useStyles();
    return (
        <Grid container md={12}>
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
                <Grid container={12} className={classes.cardBlock6}>
                    <Grid item md={4} className={classes.infoBlock}>
                        <object type="image/svg+xml" data='/icon/web.svg' width='44' height='44'/>
                        <Typography className={classes.cardTitle}>Web design</Typography>
                        <Typography className={classes.cardDescription}>Let us design your product from hand sketches
                            and UX wireframes to visual design and interactions.</Typography>
                    </Grid>
                    <Grid item md={4} className={classes.infoBlock}>
                        <object type="image/svg+xml" data='/icon/comp.svg' width='44' height='44'/>
                        <Typography className={classes.cardTitle}>Web development</Typography>
                        <Typography className={classes.cardDescription}>We create web products of all types: from
                            landing pages to web apps, from custom to WordPress.</Typography>
                    </Grid>
                    <Grid item md={4} className={classes.infoBlock}>
                        <object type="image/svg+xml" data='/icon/tel.svg' width='44' height='44'/>
                        <Typography className={classes.cardTitle}>Mobile development</Typography>
                        <Typography className={classes.cardDescription}>We use only latest technologies while developing
                            mobile products for iOS and Android.</Typography>
                    </Grid>
                    <Grid item md={4} className={classes.infoBlock}>
                        <object type="image/svg+xml" data='/icon/services.svg' width='44' height='44'/>
                        <Typography className={classes.cardTitle}>Managed cloud services</Typography>
                        <Typography className={classes.cardDescription}>Share and access resources, including databases,
                            hardware and software tools, across a remote network via multiple servers in another
                            location. </Typography>
                    </Grid>
                    <Grid item md={4} className={classes.infoBlock}>
                        <object type="image/svg+xml" data='/icon/desing.svg' width='44' height='44'/>
                        <Typography className={classes.cardTitle}>Graphic design</Typography>
                        <Typography className={classes.cardDescription}>Problem-solving through the use of typography,
                            photography, and illustration.</Typography>
                    </Grid>
                    <Grid item md={4} className={classes.infoBlock}>
                        <object type="image/svg+xml" data='/icon/other.svg' width='44' height='44'/>
                        <Typography className={classes.cardTitle}>Other services</Typography>
                        <Typography className={classes.cardDescription}>Learn more about all services we
                            provide.</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Cards;
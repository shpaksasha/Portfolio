import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Grid, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme =>({
    root: {
        flexGrow: 1,
        display: 'flex',
        padding: '3rem 6.25rem',
        margin: '0rem',
        alignItems: 'center',
        boxSizing: 'border-box'
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
        color: '#333333'
    },
    descriptionTwo: {
        marginTop: '14px',
        fontFamily: 'Poppins',
        fontSize: '16px',
        lineHeight: '150%',
        color: '#333333'
    },
    button: {
        fontWeight: 'bold',
        fontSize: '14px',
        color: '#FFFFFF',
        letterSpacing: '0.05em',
        fontFamily: 'Regular',
        marginTop: '41px',
        background: '#29AAE1',
        boxShadow: '0px 2px 4px',
        borderRadius: '3px',
        textTransform: 'none',
        padding: '14px 26px',
        '&:hover': {
            color: '#29AAE1',
            background: 'rgba(150, 224, 255, 0.80)',
            border: '2px solid #29AAE1',
            boxSizing: 'border-box'
        }
    }
}))

const Service = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container md={12}>
                <Grid item md={6}>
                    <Typography className={classes.caption}>Digital analysis</Typography>
                    <Typography className={classes.description}>Digital analytics encompasses the collection, measurement, analysis, visualisation and interpretation of digital data illustrating user behaviour on websites, mobile sites and mobile applications.</Typography>
                    <Typography className={classes.descriptionTwo}>Why use Digital Analytics to understand Customer Behavior? Digital data are not just a bunch of numbers. They are the digital footprints of your customers.</Typography>
                    <Button variant='contained' className={classes.button}>
                        Start your project
                    </Button>
                    <Button variant='contained' className={classes.button}>
                        Learn more
                    </Button>
                </Grid>
                <Grid item md={6}>
                    {/*<img className={classes.heroImage} src={'/images/pexels.jpeg'}/>*/}
                </Grid>
            </Grid>
        </div>
    )
};


export default Service;
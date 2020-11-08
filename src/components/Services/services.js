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
    captionItem: {
        marginTop: ' 40px',
        fontFamily: 'Regular',
        fontWeight: 'bold',
        fontSize: '26px',
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
        fontSize: '13px',
        color: '#FFFFFF',
        letterSpacing: '0.05em',
        fontFamily: 'Regular',
        marginTop: '41px',
        background: '#29AAE1',
        boxShadow: '0px 2px 4px',
        borderRadius: '3px',
        textTransform: 'none',
        padding: '14px 25px',
        '&:hover': {
            color: '#29AAE1',
            background: 'rgba(150, 224, 255, 0.80)',
            border: '2px solid #29AAE1',
            boxSizing: 'border-box'
        }
    },
    two: {
        marginTop: '80px'
    }
}))

const Service = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container direction='row' spacing={0} md={12}>
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
                    <object type='image/svg+xml' data='/images/ser1.svg'
                            width='590px' height='430px'/>
                </Grid>
            </Grid>
                <Grid conteiner md={12} className={classes.two}>
                    <Grid item md={8}>
                        <object type='image/svg+xml' data='/images/ser2.svg'
                                width='495px' height='245px'/>
                    </Grid>
                    <Grid item md={4}>
                        <Typography className={classes.captionItem}>Requirements Analysis</Typography>
                        <Typography className={classes.description}>You can think of requirements analysis as due diligence in some ways. It’s the name given to the collection of processes and techniques used to ensure that whatever is being developed matches user expectations and stakeholder requirements.</Typography>
                    </Grid>
                </Grid>
                <Grid container md={12}>
                    <Grid item md={6}>
                        <Typography className={classes.captionItem}>Agile Innovation Packages</Typography>
                        <Typography className={classes.description}>Our Agile Innovation Packages enable you to continually improve your website and online software systems with monthly packages of hours that can be used for
                            strategy consulting, design, development, testing and performance analysis.</Typography>
                    </Grid>
                    <Grid item md={6}>
                        <object type='image/svg+xml' data='/images/ser3.svg'
                                width='505px' height='252px'/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
};


export default Service;
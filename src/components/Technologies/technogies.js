import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Grid, Typography} from '@material-ui/core'


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
    button: {
        fontWeight: 'bold',
        fontSize: '13px',
        color: '#FFFFFF',
        letterSpacing: '0.05em',
        fontFamily: 'Regular',
        marginTop: '35px',
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
    descriptionItem:{
        fontFamily: 'Poppins',
        fontSize: '16px',
        lineHeight: '150%',
        color: '#828282'
    },
    link: {
        paddingTop: '11px',
        paddingBottom: '11px',
        borderTop: '1px solid #BDBDBD',
        fontSize: '16px',
        lineHeight: '150%',
        '& a': {
            fontFamily: 'Poppins',
            textDecoration: 'none',
            color: '#333333',
        }
        },
    link1: {
        paddingTop: '11px',
        paddingBottom: '11px',
        fontSize: '16px',
        lineHeight: '150%',
        '& a': {
            fontFamily: 'Poppins',
            textDecoration: 'none',
            color: '#333333',
        }
    },
    captionItem: {
        fontFamily: 'Regular',
        fontWeight: 'bold',
        fontSize: '26px',
        color: '#151145'
    },
}))


const Techno = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
<Grid container md={12} spacing={0}>
    <Grid container md={12}>
        <Grid item md={6}>
            <Typography className={classes.caption}>Requirements Analysis</Typography>
            <Typography className={classes.description}>We strive to be an industry leader in software development. Our expertise in requirements analysis is one of the cornerstones of our ability to achieve that goal.
                <p>Simply put, we’re rigorous in our approach and determined to ensure an accurate build, whether we’re developing an app for your in-house team, a consumer-facing website or something else completely.</p></Typography>
            <Button variant='contained' className={classes.button}>
                Start your project
            </Button>
        </Grid>
        <Grid item md={6}>
            <object type='image/svg+xml' data='/images/techno1.svg'
                    width='750px' height='440px'/>
        </Grid>
    </Grid>

    <Grid container md={12} spacing={10}>
        <Grid item md={4}>
            <Typography className={classes.descriptionItem}>Page content:</Typography>
            <Typography className={classes.link1}>1.<a target='_blank' href='https://www.pexels.com/search/business/'> Картинки для сайта</a></Typography>
            <Typography className={classes.link}>2.<a target='_blank' href='https://footballua.tv/schedule'> Телеканалы Футбол 1,2,3</a></Typography>
            <Typography className={classes.link}>3.<a target='_blank' href='https://oll.tv/ru/'> Oll.tv</a></Typography>
            <Typography className={classes.link}>4.<a target='_blank' href='https://football.ua/'> Football.ua</a></Typography>
        </Grid>
        <Grid item md={8}>
            <Typography className={classes.captionItem}>What Is Requirements Analysis?</Typography>
            <Typography className={classes.description}>You can think of requirements analysis as due diligence in some ways. It’s the name given to the collection of processes and techniques used to ensure that whatever is being developed (an app, a software suite, a website, etc.) matches user expectations and stakeholder requirements.</Typography>
        </Grid>
    </Grid>
</Grid>
        </div>
    )
};

export default Techno;
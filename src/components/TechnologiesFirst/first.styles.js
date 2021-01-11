import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    caption: {
        fontFamily: 'Regular',
        fontWeight: 'bold',
        fontSize: '50px',
        lineHeight: '120%',
        color: '#151145',
        [theme.breakpoints.down('md')]: {
            fontSize: '45px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '39px',
            marginTop: '0px',
        }
    },
    
    description: {
        marginTop: '24px',
        fontFamily: 'Poppins',
        fontSize: '16px',
        lineHeight: '150%',
        color: '#333333',
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
        }
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
        },
        [theme.breakpoints.down('md')]: {
            padding: '12px 21px',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '9px 18px',
        }
    },
    
    images: {
        width: '100%',
        height: 'auto',
        paddingLeft: '5px',

        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: 'auto',
        },
        [theme.breakpoints.down('sm')]: {
            paddingTop: '20px',
            width: '100%',
            height: 'auto',
        }
    }
}));

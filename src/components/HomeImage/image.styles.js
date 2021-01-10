import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    caption: {
        marginTop: '40px',
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

    smBlock: {
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    },

    description: {
        marginTop: '24px',
        fontFamily: 'Poppins',
        fontSize: '16px',
        lineHeight: '150%',
        color: '#828282',
        [theme.breakpoints.down('md')]: {
            fontSize: '13px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
        }
    },

    button: {
        fontWeight: 'bold',
        fontSize: '13px',
        color: '#FFFFFF',
        fontFamily: 'Regular',
        marginTop: '41px',
        backgroundColor: '#29AAE1',
        boxShadow: '0px 2px 4px',
        borderRadius: '3px',
        textTransform: 'none',
        padding: '14px 30px',
        letterSpacing: '0.05em',
        '&:hover': {
            color: '#29AAE1',
            background: 'rgba(150, 224, 255, 0.80)',
            border: '2px solid #29AAE1',
            boxSizing: 'border-box'
        },
        [theme.breakpoints.down('md')]: {
            padding: '12px 28px',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '10px 25px',
            marginTop: '20px',
            marginBottom: '20px'
        }
    },

    heroImage: {
        width: '100%',
        height: 'auto',
        maxWidth: '672px',
        paddingLeft: '32px'
    },
    [theme.breakpoints.down('md')]: {
        width: 'auto',
        height: 'auto'
    },
    [theme.breakpoints.down('sm')]: {
        width: 'auto',
        height: 'auto'
    }

}));

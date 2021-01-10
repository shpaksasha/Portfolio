import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        flexGrow: 1,
        display: 'flex',
        padding: '3rem 6.25rem',
        margin: '0rem',
        alignItems: 'center',
        boxSizing: 'border-box',
        [theme.breakpoints.down('sm')]: {
            padding: '3rem 3.125rem'
        }
    },

    caption: {
        marginTop: ' 40px',
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
        },
    },

    captionItem: {
        fontFamily: 'Regular',
        fontWeight: 'bold',
        fontSize: '26px',
        color: '#151145',
        [theme.breakpoints.down('md')]: {
            fontSize: '23px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '21px',
        },
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
        },
    },

    descriptionTwo: {
        marginTop: '14px',
        fontFamily: 'Poppins',
        fontSize: '16px',
        lineHeight: '150%',
        color: '#333333',
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
        },
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
        },
    },

    more: {
        fontWeight: 'bold',
        fontSize: '13px',
        color: '#FFFFFF',
        letterSpacing: '0.05em',
        fontFamily: 'Regular',
        marginTop: '22px',
        background: '#29AAE1',
        boxShadow: '0px 2px 4px',
        borderRadius: '3px',
        textTransform: 'none',
        padding: '8px 26px',
        '&:hover': {
            color: '#29AAE1',
            background: 'rgba(150, 224, 255, 0.80)',
            border: '2px solid #29AAE1',
            boxSizing: 'border-box'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '11px',
            padding: '6px 23px'

        },
    },

    two: {
        display: 'flex',
        marginTop: '110px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '60px'
        },
    },

    three: {
        display: 'flex',
        marginTop: '110px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '60px'
        }
    },

    images: {
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: 'auto',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: 'auto',
        }
    }

}));

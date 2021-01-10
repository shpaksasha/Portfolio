import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '75px',
        flexGrow: 1,
        display: 'flex',
        backgroundColor: '#F2F2F2',
        height: '315px',
        width: '100%',
        padding: '0rem 6.25rem',
        boxSizing: 'border-box',
        [theme.breakpoints.down('md')]: {
            height: '250px'
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
            height: '200px',
            textAlign: 'center',
            display: 'inline-block'
        }
    },

    caption: {
        marginTop: '44px',
        fontWeight: 'bold',
        color: '#151145',
        fontSize: '18px',
        lineHeight: '150%',
        fontFamily: 'Roboto, sans-serif',
        paddingBottom: '18px',
        [theme.breakpoints.down('md')]: {
            marginTop: '40px',
            fontSize: '17px',
            paddingBottom: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
            fontSize: '15px',
            paddingBottom: '15px'
        }
    },

    text: {
        paddingBottom: '18px',
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '12px'
        }
    },

    link: {
        color: '#828282',
        fontSize: '16px',
        lineHeight: '150%',
        fontFamily: 'Poppins',
        textDecoration: 'none',
        [theme.breakpoints.down('md')]: {
            fontSize: '15px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '13px',

        }
    },

    linkActive: {
        color: '#151145',
        borderBottom: '1px solid #37474f'
    }
}));

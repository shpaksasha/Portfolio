import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        display: 'flex',
        backgroundColor: '#eceff1',
        padding: '0rem 6.25rem',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
            padding: '0rem 3.125rem',
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: '17px',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
            padding: '0rem 0rem',
            cursor: 'pointer'
        },
    },

    shadow: {
        boxShadow: '0px 4px 11px 2px rgba(0,0,0,0.25)'
    },

    icon: {
        textDecoration: 'none',
    },

    eye: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },

    see: {
        width: '100%',
        color: '#212121',
        fontSize: '12px',
        letterSpacing: '120%',
        fontFamily: 'Montserrat',
        paddingLeft: '10px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '10px',
            paddingLeft: '8px'
        },
    },

    link: {
        position: 'relative',
        textDecoration: 'none',
        color: '#828282',
        fontSize: '16px',
        lineHeight: '24px',
        fontFamily: 'Roboto, sans-serif',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            lineHeight: '18px',
        },
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'space-between',
            fontSize: '25px',
            lineHeight: '45px',
        }
    },

    linkActive: {
        paddingBottom: '5px',
        borderBottom: '2px solid #37474f',
        color: '#37474f',
        fontSize: '16px',
        fontFamily: 'Roboto, sans-serif',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            lineHeight: '18px',
        },
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'space-between',
            fontSize: '25px',
            lineHeight: '45px'
        }
    },

    appbar: {
        boxSizing: 'border-box',
        position: 'sticky',
    },

    menu: {
        [theme.breakpoints.down('xs')]: {
            boxSizing: 'border-box',
            background: '#eceff1',
            margin: '0px',
            bottom: '95px',
            right: '32px',
            top: 'unset !important',
            left: 'unset !important',
            height: '335px',
            padding: '0 12vw',
        }
    }
}));

import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles(theme => ({
    services: {
        width: '335px',
        fontWeight: 'bold',
        fontFamily: 'Regular',
        fontSize: '35px',
        lineHeight: '120%',
        wordSpacing: '2px',
        color: '#151145',
        marginBottom: '42px',
        marginTop: '60px',
        [theme.breakpoints.down('md')]: {
            fontSize: '32px',
        }
    },

    block: {
        position: 'relative',
        width: '268px',
        height: '425px',
        boxShadow: '3px 4px 12px',
        '&:hover': {
            transform: 'translateX(2px)',
        },
        [theme.breakpoints.down('md')]: {
            width: 'auto',
            marginRight: '20px'

        }
    },

    cardTitle: {
        color: '#29AAE1',
        fontSize: '22px',
        lineHeight: '120%',
        fontFamily: 'Regular',
        marginBottom: '16px',
        marginTop: '10px',
        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
        }
    },

    cardDescription: {
        color: '#828282',
        fontSize: '14px',
        lineHeight: '150%',
        fontFamily: 'Poppins',
        marginBottom: '21px',
        [theme.breakpoints.down('md')]: {
            fontSize: '12px',
        }
    },

    list: {
        color: '#333333',
        fontSize: '13px',
        lineHeight: '180%',
        fontFamily: 'Dancing Script, cursive',
        display: 'const block',
        marginBottom: '62px',
        '& ul': {
            paddingLeft: 15,
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '11px',
        }
    },

    learn: {
        color: '#ffffff',
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
        },
        [theme.breakpoints.down('md')]: {
            padding: '6px 15px'
        }
    },

    cardBlock6: {
        marginTop: '158px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '50px',
            textAlign: 'center'
        },
    },

    infoBlockTop: {
        maxWidth: '270px',
        margin: '0 auto',
        paddingBottom: '52px'
    },

    infoBlockBottom: {
        maxWidth: '270px',
        margin: '0 auto',
    }

}));

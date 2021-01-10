import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles(theme => ({
    allBlock: {
        marginTop: '60px'
    },

    captionItem: {
        paddingTop: '52px',
        fontFamily: 'Poppins',
        fontSize: '16px',
        lineHeight: '150%',
        color: '#828282'
    },

    firstLink: {
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

    descriptionBlock: {
        marginLeft: '80px'
    },

    caption: {
        marginTop: '48px',
        fontFamily: 'Regular',
        fontWeight: 'bold',
        fontSize: '26px',
        color: '#151145',
        [theme.breakpoints.down('md')]: {
            fontSize: '23px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            marginTop: '15px',
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
    }
}));

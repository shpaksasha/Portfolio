import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        padding: '3rem 6.25rem',
        margin: '0rem',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: '3rem 3.125rem'
        },
    }
}));

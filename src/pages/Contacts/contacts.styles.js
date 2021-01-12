import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '32vh',
        flexGrow: 1,
        display: 'flex',
        padding: '3rem 6.25rem',
        margin: '0rem',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            minHeight: '37.4vh'
        }
    }
}));

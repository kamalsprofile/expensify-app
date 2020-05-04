import React from 'react';
import { connect } from 'react-redux';
import { setFilterText } from '../actions/filters'
import TextField from '@material-ui/core/TextField';
import {
    //fade,
    ThemeProvider,
    //withStyles,
    makeStyles,
    createMuiTheme,
} from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

/* const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    }
})(TextField); */

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    margin: {
        margin: theme.spacing(1),
    },
    resize: {
        fontSize: 15
    }
}));
const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const FilterText = (props) => {
    const classes = useStyles();
    return (
        <div className="text-filters">
            <ThemeProvider theme={theme}>
                <TextField className={classes.margin} InputProps={{
                    classes: {
                        input: classes.resize,
                    },
                }} fullWidth id="outlined-basic" label="Search Expenses" variant="outlined" value={props.filters.text} onChange={(e) => {
                    props.dispatch(setFilterText(e.target.value))
                }} />
            </ThemeProvider>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps)(FilterText);
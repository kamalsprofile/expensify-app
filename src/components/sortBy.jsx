import React from 'react';
import { connect } from 'react-redux';
import { sortByAmount, sortByDate, sortByAlpha } from '../actions/filters'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { green } from '@material-ui/core/colors';
import {
    //fade,
    ThemeProvider,
    //withStyles,
    makeStyles,
    createMuiTheme,
} from '@material-ui/core/styles';

/* 
const CssSelect = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    }
})(Select); */
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

const SortBy = (props) => {
    const classes = useStyles();
    const change = (e) => {
        const value = e.target.value
        if (value === 'amount') props.dispatch(sortByAmount())
        else if (value === 'date') props.dispatch(sortByDate())
        else props.dispatch(sortByAlpha())

    }
    return (
        <div>
            <ThemeProvider theme={theme}>
                <FormControl variant="outlined" className={classes.margin}>
                    <InputLabel htmlFor="outlined-sort-native-simple" value={props.filters.sortBy}>Sort-By</InputLabel>
                    <Select
                        native
                        label="Sort-By"
                        onChange={change} id="sortBy">
                        <option value="amount">amount</option>
                        <option value="date">date</option>
                        <option value="alpha">Alpha</option>
                    </Select>
                </FormControl>

            </ThemeProvider>





        </div >

    );
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(SortBy);
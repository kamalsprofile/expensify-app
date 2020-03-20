import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortByAmount, sortByDate, sortByAlpha } from '../actions/filters'

const SortBy = (props) => {
    const change = (e) => {

        const value = e.target.value
        if (value === 'amount') props.dispatch(sortByAmount())
        else if (value === 'date') props.dispatch(sortByDate())
        else props.dispatch(sortByAlpha())

    }
    return (
        <div>
            <label value={props.filters.sortBy}>Sort By</label>
            <select onChange={change} id="sortBy">
                <option value="amount">amount</option>
                <option value="date">date</option>
                <option value="alpha">Alpha</option>
            </select>

        </div>

    );
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(SortBy);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilterText } from '../actions/filters'

const FilterText = (props) => {
    return (
        <div>
            <input type="text" value={props.filters.text} onChange={(e) => {
                props.dispatch(setFilterText(e.target.value))
            }} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps)(FilterText);
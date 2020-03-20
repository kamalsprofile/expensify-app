import React, { Component } from 'react';
import { DateRangePicker } from 'react-dates'
import { connect } from 'react-redux';
import { setStartDate, setEndDate } from '../actions/filters';

class FilterByDates extends Component {
    state = {
        focusedInput: null,
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    render() {
        return (
            <div>
                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />

            </div>
        );
    }
}

const mapStateToFilters = (state) => {
    return { filters: state.filters }
}
export default connect(mapStateToFilters)(FilterByDates);
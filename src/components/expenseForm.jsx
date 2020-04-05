import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'


class ExpenseForm extends Component {
    constructor(props) {
        console.log(props)
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: "",
            isUpdate: props.expense ? "Update" : "Add"
        }
    }


    descriptionChange = (e) => {
        let description = e.target.value;
        this.setState({ description })
    }
    noteCahnge = (e) => {
        let note = e.target.value;
        this.setState({ note })
    }
    amountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({ amount })
        }
    }
    dateChangeHandler = (createdAt) => {
        if (createdAt) {
            this.setState({ createdAt })
        }

    }
    focuseChangeHandler = ({ focused }) => {
        this.setState({ calenderFocused: focused })
    }
    formSubmitted = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            const error = "Please enter the description and the amount for the new expense"
            this.setState({ error })
        }
        else {
            const error = ""
            this.setState({ error })
            const expense = {
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            }
            this.props.onSubmit(expense)
        }
    }
    render() {

        return (
            <form onSubmit={this.formSubmitted}>
                {this.state.error && <p>{this.state.error}</p>}
                <input
                    type="text"
                    autoFocus
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.descriptionChange}
                />
                <input
                    type="text"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.amountChange}
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.dateChangeHandler}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.focuseChangeHandler}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea
                    placeholder="Add note (optional)"
                    onChange={this.noteCahnge}
                    value={this.state.note}
                >
                </textarea>
                <button onSubmit={this.addExpense} >{this.state.isUpdate}</button>
            </form>
        );
    }
}

export default ExpenseForm;
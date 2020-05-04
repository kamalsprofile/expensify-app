import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'
//import Button from '@material-ui/core/Button';


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
            <div className="container">
                <form className="expense-form" onSubmit={this.formSubmitted}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <div className="form-Item">
                        <div className="group">
                            <input type="text" 
                                autoFocus
                                placeholder="Description"
                                value={this.state.description}
                                onChange={this.descriptionChange} />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                        </div>

                    </div>
                    <div className="form-Item">
                        <div className="group">
                            <input type="text" 
                                placeholder="Amount"
                                value={this.state.amount}
                                onChange={this.amountChange} />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                        </div>
                    </div>


                    <div className="form-Item">
                        <div className="group">
                            <input type="text" 
                                placeholder="Add note (optional)"
                                onChange={this.noteCahnge}
                                value={this.state.note} />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                        </div>

                    </div>
                    <div className="form-Item">
                        <div className="date-picker">
                            <SingleDatePicker
                                date={this.state.createdAt}
                                onDateChange={this.dateChangeHandler}
                                focused={this.state.calenderFocused}
                                onFocusChange={this.focuseChangeHandler}
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                            />

                        </div>

                    </div>
                    <div className="btn-expense">
                        <a className="btn-form-expense" href="!#" onClick={this.formSubmitted} >{this.state.isUpdate}</a>
                    </div>

                </form>
            </div >

        );
    }
}

export default ExpenseForm;
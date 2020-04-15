import React, { Component } from 'react';
import ExpenseForm from './expenseForm';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses'


const EditExpense = (props) => {
    console.log(props)
    return (
        <div>


            <div className="summary-content">
                <div className="container">
                    <h1>Edit Expense</h1>
                    <p> editing <strong>{props.expense.description}</strong>  expense</p>
                </div>
            </div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(updatedExpense) => {
                    const id = props.match.params.id
                    props.dispatch(startEditExpense({ id }, updatedExpense))
                    props.history.push("/")
                }}
            />
            <div className="btn-expense">
                <a className="btn-form-expense" style={{ background: "red" }} onClick={() => {
                    const id = props.match.params.id
                    props.dispatch(startRemoveExpense({ id }))
                    props.history.push("/dashboard")

                }}>Remove</a>
            </div>

        </div>

    );
}
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}
export default connect(mapStateToProps)(EditExpense);
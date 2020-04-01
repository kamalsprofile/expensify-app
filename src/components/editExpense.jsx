import React, { Component } from 'react';
import ExpenseForm from './expenseForm';
import { connect } from 'react-redux';
import { editExpense, startRemoveExpense } from '../actions/expenses'


const EditExpense = (props) => {
    console.log(props)
    return (
        <div>
            <p> we are going to edit this item {props.match.params.id} </p>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(updatedExpense) => {
                    const id = props.match.params.id
                    props.dispatch(editExpense({ id }, updatedExpense))
                    props.history.push("/")
                }}
            />
            <button onClick={() => {
                const id = props.match.params.id
                props.dispatch(startRemoveExpense({ id }))
                props.history.push("/")

            }}>Remove</button>
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
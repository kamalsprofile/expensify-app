import React from 'react';
import ExpenseForm from './expenseForm'
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses'


const CreateExpense = (props) => {
    return (
        <div>
            <h1>Create Expense</h1>
            <ExpenseForm onSubmit={(expense) => {
                props.dispatch(addExpense(expense))
                props.history.push("/")
            }} />

        </div>
    );
}



export default connect()(CreateExpense);
import React from 'react';
import ExpenseForm from './expenseForm'
import { connect } from 'react-redux';
import { addExpenseFunction } from '../actions/expenses'


const CreateExpense = (props) => {
    return (
        <div>
            <h1>Create Expense</h1>
            <ExpenseForm onSubmit={(expense) => {
                props.dispatch(addExpenseFunction(expense))
                props.history.push("/dashboard")
            }} />

        </div>
    );
}



export default connect()(CreateExpense);
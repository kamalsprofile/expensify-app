import uuid from 'uuid';
import database from '../firebase/firebase'

//ADD EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense

});

export const addExpenseFunction = (newExpense = {}) => {
    return (dispatch) => {
        const { description = '', note = '', amount = 0, createdAt = 0 } = newExpense;
        const expense = {
            description,
            note,
            amount,
            createdAt
        }
        database.ref("expenses")
            .push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }))
            })
    }

}

//REMOVE EXPENSE
export const removeExpense = ({ id }) =>
    ({
        type: 'REMOVE_EXPENSE',
        id
    })
export const startRemoveExpense = ({ id }) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }))
        })
    }

}

// EDIT EXPENSE
export const editExpense = ({ id }, updates) => {

    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }

}
export const startEditExpense = ({ id }, updates) => {

    return (dispatch) => {
        return database.ref(`expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense({ id }, updates))
        })
    }
}

// setup the expenses array

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})
export const startSetExpenses = () => {

    return (dispatch) => {

        return database.ref("expenses")
            .once('value')
            .then((snapShot) => {
                const expenses = []
                snapShot.forEach(record => {
                    expenses.push({
                        id: record.key,
                        ...record.val()
                    })
                });
                console.log('my expenses', expenses);
                dispatch(setExpenses(expenses))
            })
    }


}
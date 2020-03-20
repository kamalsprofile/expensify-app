/* import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD EXPENSE
const addExpense = (
    { description = '', note = '', amount = 0, createdAt = 0 } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }

});

//REMOVE EXPENSE
const removeExpense = ({ id }) =>
    ({
        type: 'REMOVE_EXPENSE',
        id
    })

// EDIT EXPENSE
const editExpense = ({ id }, updates) => {

    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }

}
// set the filter text
const setFilterText = (text = " ") => {
    return {
        type: 'SET_FILTER_TEXT',
        text
    }
}

//sort by amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: "amount"
})
//sort by date
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: "date"
})

// set start date
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
})
// set end date
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})
const demoState = {
    expenses: [
        {
            id: "1234",
            description: "text",
            note: "some note",
            amount: 0,
            createdAt: 0
        }],
    filters: {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
}


const defaultExpensesState = []
const expensesReducer = (state = defaultExpensesState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter((item) => {
                return item.id != action.id
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id == action.id) {
                    console.log(action.updates)
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else return expense
            })
        default:
            return state
    }
}

const defaultFiltersState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = defaultFiltersState, action) => {
    switch (action.type) {
        case 'SET_FILTER_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}


const getVisibleExpenses = (expenses, { text, sortBy, endDate, startDate }) => {
    return expenses.filter(expense => {
        const filteredByStartDate = typeof startDate !== 'number' || startDate <= expense.createdAt;
        const filteredByEndDate = typeof endDate !== 'number' || endDate >= expense.createdAt;
        console.log(text);
        const filteredByText = expense.description.toLowerCase().includes(text.toLowerCase());
        return filteredByEndDate && filteredByStartDate && filteredByText;
    }).sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt > b.createdAt ? -1 : 1
        }
        else if (sortBy === "amount") {
            return a.amount > b.amount ? -1 : 1
        }
    })
}
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
})
);



store.subscribe(() => {
    const state = store.getState();

    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses)
});


// add
const expenseOne = store.dispatch(addExpense({ description: "house Rent", amount: 300, createdAt: 200 }));
//add
const expenseTwo = store.dispatch(addExpense({ description: " new car", amount: 4000, createdAt: 100 }));
//delete
//store.dispatch(removeExpense({ id: expenseOne.expense.id }))
//edit
//store.dispatch(editExpense({ id: expenseTwo.expense.id }, { amount: 1900, description: "this is the updated text" }))
// set the text filter
store.dispatch(setFilterText(''));
//store.dispatch(setFilterText(''));
//sort by amount
//store.dispatch(sortByAmount());
//sort by date
store.dispatch(sortByDate());
//set start date
//store.dispatch(setStartDate(145));
//store.dispatch(setStartDate());
// set end date
//store.dispatch(setEndDate(500));
//store.dispatch(setEndDate()); */
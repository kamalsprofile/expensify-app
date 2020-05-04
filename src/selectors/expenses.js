import moment from 'moment';
export default (expenses, { text, sortBy, endDate, startDate }) => {

    const filteredExpenses = expenses.filter(expense => {
        const createdAtMoment = moment(expense.createdAt)
        const filteredByStartDate = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const filteredByEndDate = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const filteredByText = expense.description.toLowerCase().includes(text.toLowerCase());
        return filteredByEndDate && filteredByStartDate && filteredByText;
    })

    const sortedExpenses = filteredExpenses.sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt > b.createdAt ? -1 : 1
        }
        else if (sortBy === "amount") {
            return a.amount > b.amount ? -1 : 1
        }
        else if (sortBy === 'alpha') {
            return a.description > b.description ? 1 : -1;
        }

    })
    return sortedExpenses
};

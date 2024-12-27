import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expenses: [],
  filteredExpenses: [],
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const newExpense = action.payload;
      state.expenses.push(newExpense);
      state.filteredExpenses = state.expenses;
    },
    filterByName: (state, action) => {
      const { name } = action.payload;
      console.log('Filtering by name:', name);  // Debugging log
      state.filteredExpenses = state.expenses.filter((expense) =>
        expense.name.toLowerCase().includes(name.toLowerCase())
      );
    },
    filterByDate: (state, action) => {
      const { startDate, endDate } = action.payload;
      console.log('Filtering by date:', startDate, endDate);  // Debugging log
      if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        state.filteredExpenses = state.expenses.filter((expense) => {
          const expenseDate = new Date(expense.date);
          return expenseDate >= start && expenseDate <= end;
        });
      }
    },
    filterByAmount: (state, action) => {
      const { minAmount, maxAmount } = action.payload;
      console.log('Filtering by amount:', minAmount, maxAmount);  // Debugging log
      state.filteredExpenses = state.expenses.filter((expense) => {
        const amount = parseFloat(expense.amount);
        return (
          (!minAmount || amount >= minAmount) &&
          (!maxAmount || amount <= maxAmount)
        );
      });
    },
    clearFilters: (state) => {
      state.filteredExpenses = state.expenses;
    },
  },
});

export const { addExpense, filterByName, filterByDate, filterByAmount, clearFilters } = expenseSlice.actions;
export default expenseSlice.reducer;
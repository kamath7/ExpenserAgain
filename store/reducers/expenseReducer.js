import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
  filteredExpenses: [],
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
      state.filteredExpenses = [...state.expenses];
    },
    filterByName: (state, action) => {
      const { name } = action.payload;
      state.filteredExpenses = state.expenses.filter((expense) =>
        expense.name.toLowerCase().includes(name.toLowerCase())
      );
    },
    filterByDate: (state, action) => {
      const { startDate, endDate } = action.payload;
      state.filteredExpenses = state.expenses.filter((expense) => {
        const expenseDate = new Date(expense.date);
        return expenseDate >= startDate && expenseDate <= endDate;
      });
    },
    filterByAmount: (state, action) => {
      const { minAmount, maxAmount } = action.payload;
      state.filteredExpenses = state.expenses.filter((expense) => {
        const amount = parseFloat(expense.amount);
        return amount >= minAmount && amount <= maxAmount;
      });
    },
    clearFilters: (state) => {
      state.filteredExpenses = [...state.expenses];
    },
  },
});

export const {
  addExpense,
  filterByDate,
  filterByName,
  filterByAmount,
  clearFilters,
} = expenseSlice.actions;

export default expenseSlice.reducer;

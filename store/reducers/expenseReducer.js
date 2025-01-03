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
      state.expenses.push(action.payload);
      state.filteredExpenses = state.expenses;
    },
    updateExpense: (state, action) => {
      const updatedExpense = action.payload;
      const index = state.expenses.findIndex(expense => expense.id === updatedExpense.id);
      if (index !== -1) {
        state.expenses[index] = updatedExpense;  // Replace with updated expense
        state.filteredExpenses = state.expenses; // Recalculate filtered expenses
      }
    },
    removeExpense: (state, action) => {
      const expenseId = action.payload;
      state.expenses = state.expenses.filter(expense => expense.id !== expenseId);
      state.filteredExpenses = state.filteredExpenses.filter(expense => expense.id !== expenseId);
    },
    // Additional actions for filtering, clearing filters
  },
});

export const { addExpense, updateExpense, removeExpense } = expenseSlice.actions;

export default expenseSlice.reducer;

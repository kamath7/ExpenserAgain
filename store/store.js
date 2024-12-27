import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./reducers/expenseReducer"; // Ensure the correct path to your reducer file

const store = configureStore({
  reducer: {
    expense: expenseReducer, // Use the correct reducer name
  },
});

export default store;

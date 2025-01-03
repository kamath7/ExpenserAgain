import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { updateExpense } from "../store/reducers/expenseReducer";
import SimpleForm from "../SimpleForm";

export default function EditExpenseScreen({ route, navigation }) {
  const { expense } = route.params;
  
  const [expenseName, setExpenseName] = useState(expense.name);
  const [expenseAmount, setExpenseAmount] = useState(expense.amount);
  
  // Ensure expense.date is a valid Date object
  const [expenseDate, setExpenseDate] = useState(() => {
    const parsedDate = new Date(expense.date);
    return parsedDate instanceof Date && !isNaN(parsedDate) ? parsedDate : new Date(); // Fallback to current date if invalid
  });

  const dispatch = useDispatch();

  const handleEditExpense = (updatedData) => {
    const updatedExpense = {
      ...expense,  // Keep other data intact
      name: updatedData.name,
      amount: updatedData.amount,
      date: updatedData.date,
    };

    dispatch(updateExpense(updatedExpense));
    navigation.goBack();  // Navigate back to the ExpenseList screen
  };

  return (
    <View style={styles.container}>
      <SimpleForm
        onSubmit={handleEditExpense}
        expenseName={expenseName}
        setExpenseName={setExpenseName}
        expenseAmount={expenseAmount}
        setExpenseAmount={setExpenseAmount}
        expenseDate={expenseDate}  // Pass the actual Date object
        setExpenseDate={setExpenseDate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
    justifyContent: "flex-start",
  },
});

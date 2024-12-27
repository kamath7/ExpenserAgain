import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addExpense } from "../store/reducers/expenseReducer"; // Ensure you have this action
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";
import SimpleForm from "../SimpleForm";

export default function AddExpenseScreen({ navigation }) {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  const dispatch = useDispatch();

  const handleAddExpense = (expenseData) => {
    const newExpense = {
      id: uuidv4(), // Generate a unique ID using uuid
      name: expenseData.name,
      amount: expenseData.amount,
      date: expenseData.date,
    };

    dispatch(addExpense(newExpense));
    navigation.goBack(); // Navigate back to the ExpenseList screen
  };

  return (
    <View style={styles.container}>
      <SimpleForm
        onSubmit={handleAddExpense} // Pass the handler to SimpleForm
        expenseName={expenseName}
        setExpenseName={setExpenseName}
        expenseAmount={expenseAmount}
        setExpenseAmount={setExpenseAmount}
        expenseDate={expenseDate}
        setExpenseDate={setExpenseDate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9", // Light background for consistency
    justifyContent: "flex-start", // Align items from top
  },
});

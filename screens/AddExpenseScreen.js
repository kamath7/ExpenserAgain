import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addExpense } from "../store/reducers/expenseReducer"; // Ensure you have this action
import { v4 as uuidv4 } from 'uuid'; // Import the uuid library

export default function AddExpenseScreen({ navigation }) {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  
  const dispatch = useDispatch();

  const handleAddExpense = () => {
    const newExpense = {
      id: uuidv4(), // Generate a unique ID using uuid
      name: expenseName,
      amount: expenseAmount,
      date: expenseDate,
    };

    dispatch(addExpense(newExpense));
    navigation.goBack(); // Navigate back to the ExpenseList screen
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Expense Name"
        value={expenseName}
        onChangeText={setExpenseName}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={expenseAmount}
        onChangeText={setExpenseAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={expenseDate}
        onChangeText={setExpenseDate}
      />
      <Button title="Add Expense" onPress={handleAddExpense} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

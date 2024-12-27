import React from "react";
import { FlatList, View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { clearFilters } from "../store/reducers/expenseReducer";

const ExpenseListScreen = ({ navigation }) => {
  const expenses = useSelector((state) => state.expense.filteredExpenses);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {/* Header for Saved Expenses */}
      <Text style={styles.header}>Saved Expenses</Text>

      {/* Expense List */}
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text style={styles.expenseText}>Name: {item.name}</Text>
            <Text style={styles.expenseText}>Amount: ₹{item.amount}</Text>
            <Text style={styles.expenseText}>Date: {item.date}</Text>
          </View>
        )}
        contentContainerStyle={styles.expenseList}
      />

      {/* Button to Clear Filters */}
      <TouchableOpacity style={styles.button} onPress={() => dispatch(clearFilters())}>
        <Text style={styles.buttonText}>Clear Filters</Text>
      </TouchableOpacity>

      {/* Add Expense Button */}
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => navigation.navigate('AddExpense')}  // Navigate to AddExpense screen
      >
        <Text style={styles.addButtonText}>Add Expense</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between", // This will space out the content properly
  },
  expenseList: {
    flexGrow: 1, // Makes sure the list takes up remaining space
    marginBottom: 20, // Adjust the bottom margin
  },
  expenseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  expenseText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#DC3545",
    padding: 10,
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#28a745",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default ExpenseListScreen;

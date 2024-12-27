import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { clearFilters } from "../store/reducers/expenseReducer";
import ExpenseFilter from "../ExpenseFilter";  // Move the filter here

const ExpenseListScreen = ({ navigation }) => {
  const expenses = useSelector((state) => state.expense.filteredExpenses);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {/* ExpenseFilter component - Show filters only when needed */}
      <ExpenseFilter />

      
      <FlatList
      data={expenses}
      keyExtractor={(item) => item.id ? item.id.toString() : 'no-id'} // Safe fallback
      renderItem={({ item }) => (
        <View style={styles.expenseItem}>
          <Text style={styles.expenseText}>{item.name}</Text>
          <Text style={styles.expenseText}>{item.amount}</Text>
          <Text style={styles.expenseText}>{item.date}</Text>
        </View>
      )}
    />

      {/* Button Section: Add Expense, Clear Filters */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddExpense')}  // Navigate to Add Expense screen
        >
          <Text style={styles.buttonText}>Add Expense</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(clearFilters())}  // Clear filters
        >
          <Text style={styles.buttonText}>Clear Filters</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9', // Light background color for better contrast
    justifyContent: 'flex-start', // Items will be aligned from the top
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  expenseText: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto', // Push the buttons to the bottom
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    width: '48%', // Ensure buttons are not stretched too wide
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ExpenseListScreen;

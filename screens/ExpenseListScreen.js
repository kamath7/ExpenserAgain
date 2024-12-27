import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { clearFilters, filterByName, filterByDate, filterByAmount } from "../store/reducers/expenseReducer";
import ExpenseFilter from "../ExpenseFilter";

const ExpenseListScreen = ({ navigation }) => {
  const expenses = useSelector((state) => state.expense.filteredExpenses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearFilters());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
    
        <ExpenseFilter dispatch={dispatch} />
      </View>

      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id ? item.id.toString() : 'no-id'}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text style={styles.expenseText}>{item.name}</Text>
            <Text style={styles.expenseText}>{item.amount}</Text>
            <Text style={styles.expenseText}>{item.date}</Text>
          </View>
        )}
      />

      {/* Button Section: Add Expense */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddExpense')}  // Navigate to Add Expense screen
        >
          <Text style={styles.buttonText}>Add Expense</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    justifyContent: 'flex-start',
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
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    width: '48%',
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ExpenseListScreen;

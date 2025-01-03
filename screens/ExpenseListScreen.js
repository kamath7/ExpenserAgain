import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { clearFilters } from "../store/reducers/expenseReducer";
import ExpenseFilter from "../ExpenseFilter";
import ExpenseList from "../ExpenseList";

const ExpenseListScreen = ({ navigation }) => {
  const expenses = useSelector((state) => state.expense.filteredExpenses);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(clearFilters());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Expenses</Text>
      <ExpenseList expenses={expenses} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddExpense')}>
          <Text style={styles.buttonText}>Add Expense</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setShowModal(true)}>
          <Text style={styles.buttonText}>Show Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Modal to display ExpenseFilter directly */}
      <Modal visible={showModal} animationType="slide" onRequestClose={() => setShowModal(false)}>
        <View style={styles.modalContainer}>
          <ExpenseFilter dispatch={dispatch} setShowModal={setShowModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default ExpenseListScreen;

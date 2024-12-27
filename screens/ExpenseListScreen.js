import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ExpensesList from '../ExpenseList';
import { clearFilters, filterByAmount, filterByDate, filterByName } from '../store/reducers/expenseReducer';

export default function ExpenseListScreen({ navigation }) {
  const expenses = useSelector((state) => state.expense.filteredExpenses);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [nameFilter, setNameFilter] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');

  const handleDateFilter = () => dispatch(filterByDate({ startDate, endDate }));
  const handleNameFilter = () => dispatch(filterByName({ name: nameFilter }));
  const handleAmountFilter = () => dispatch(filterByAmount({ minAmount, maxAmount }));
  const handleClearFilters = () => dispatch(clearFilters());

  return (
    <ScrollView style={styles.container}>
      <View style={styles.filterContainer}>
        <View style={styles.filterGroup}>
          <TextInput
            style={styles.input}
            placeholder="Start Date"
            value={startDate || ''}
            onChangeText={setStartDate}
          />
          <TextInput
            style={styles.input}
            placeholder="End Date"
            value={endDate || ''}
            onChangeText={setEndDate}
          />
          <Button title="Filter by Date" onPress={handleDateFilter} />
        </View>

        <View style={styles.filterGroup}>
          <TextInput
            style={styles.input}
            placeholder="Filter by Name"
            value={nameFilter}
            onChangeText={setNameFilter}
          />
          <Button title="Filter by Name" onPress={handleNameFilter} />
        </View>

        <View style={styles.filterGroup}>
          <TextInput
            style={styles.input}
            placeholder="Min Amount"
            value={minAmount}
            onChangeText={setMinAmount}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Max Amount"
            value={maxAmount}
            onChangeText={setMaxAmount}
            keyboardType="numeric"
          />
          <Button title="Filter by Amount" onPress={handleAmountFilter} />
        </View>

        <Button title="Clear Filters" onPress={handleClearFilters} color="#ff5c5c" />
      </View>

      <ExpensesList expenses={expenses} />

      <View style={styles.buttonContainer}>
        <Button title="Add an Expense" onPress={() => navigation.replace('AddExpense')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  filterContainer: {
    marginBottom: 20,
  },
  filterGroup: {
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

import React, { useState } from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ExpensesList from '../ExpenseList';
import {
  clearFilters,
  filterByAmount,
  filterByDate,
  filterByName,
} from '../store/reducers/expenseReducer';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function ExpenseListScreen({ navigation }) {
  const expenses = useSelector((state) => state.expense.filteredExpenses);
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [nameFilter, setNameFilter] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const handleDateFilter = () => {
    dispatch(filterByDate({ startDate, endDate }));
  };

  const handleNameFilter = () => {
    dispatch(filterByName({ name: nameFilter }));
  };

  const handleAmountFilter = () => {
    dispatch(filterByAmount({ minAmount, maxAmount }));
  };

  const handleClearFilters = () => {
    setStartDate(null);
    setEndDate(null);
    setNameFilter('');
    setMinAmount('');
    setMaxAmount('');
    dispatch(clearFilters());
  };

  return (
    <View style={styles.container}>
      {/* Date Filters */}
      <Button
        title="Pick Start Date"
        onPress={() => setShowStartPicker(true)}
      />
      {showStartPicker && (
        <DateTimePicker
          value={startDate || new Date()}
          mode="date"
          onChange={(event, selectedDate) => {
            setShowStartPicker(false);
            setStartDate(selectedDate);
          }}
        />
      )}

      <Button
        title="Pick End Date"
        onPress={() => setShowEndPicker(true)}
      />
      {showEndPicker && (
        <DateTimePicker
          value={endDate || new Date()}
          mode="date"
          onChange={(event, selectedDate) => {
            setShowEndPicker(false);
            setEndDate(selectedDate);
          }}
        />
      )}
      <Button title="Filter by Date" onPress={handleDateFilter} />

      {/* Name Filter */}
      <TextInput
        style={styles.input}
        placeholder="Filter by Name"
        value={nameFilter}
        onChangeText={setNameFilter}
      />
      <Button title="Filter by Name" onPress={handleNameFilter} />

      {/* Amount Filters */}
      <TextInput
        style={styles.input}
        placeholder="Min Amount"
        keyboardType="numeric"
        value={minAmount}
        onChangeText={setMinAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Max Amount"
        keyboardType="numeric"
        value={maxAmount}
        onChangeText={setMaxAmount}
      />
      <Button title="Filter by Amount" onPress={handleAmountFilter} />

      <Button title="Clear Filters" onPress={handleClearFilters} />

      <ExpensesList expenses={expenses} />
      <Button
        title="Add an Expense"
        onPress={() => navigation.navigate('AddExpense')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

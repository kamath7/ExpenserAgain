import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ExpensesList from '../ExpenseList';
import DatePicker from 'react-native-datepicker'; // Example date picker
import { clearFilters, filterByAmount, filterByDate, filterByName } from '../store/reducers/expenseReducer';

export default function ExpenseListScreen({ navigation }) {
  const expenses = useSelector((state) => state.expenses.filteredExpenses);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [nameFilter, setNameFilter] = useState('');
  const [minAmount, setMinAmount] = useState(null);
  const [maxAmount, setMaxAmount] = useState(null);

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
    dispatch(clearFilters());
  };

  return (
    <View style={styles.container}>
      {/* Date Filter */}
      <DatePicker 
        style={{ width: 200 }}
        date={startDate}
        mode="date"
        placeholder="Start Date"
        onDateChange={(date) => setStartDate(date)}
      />
      <DatePicker
        style={{ width: 200 }}
        date={endDate}
        mode="date"
        placeholder="End Date"
        onDateChange={(date) => setEndDate(date)}
      />
      <Button title="Filter by Date" onPress={handleDateFilter} />

      {/* Name Filter */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
        onChangeText={(text) => setNameFilter(text)}
        value={nameFilter}
        placeholder="Filter by Name"
      />
      <Button title="Filter by Name" onPress={handleNameFilter} />

      {/* Amount Filter */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
        onChangeText={(text) => setMinAmount(text)}
        value={minAmount}
        placeholder="Min Amount"
        keyboardType="numeric"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
        onChangeText={(text) => setMaxAmount(text)}
        value={maxAmount}
        placeholder="Max Amount"
        keyboardType="numeric"
      />
      <Button title="Filter by Amount" onPress={handleAmountFilter} />

      <Button title="Clear Filters" onPress={handleClearFilters} />

      <ExpensesList expenses={expenses} />
      <View style={styles.buttonContainer}>
        <Button
          title="Add an Expense"
          onPress={() => navigation.replace('AddExpense')}
        />
      </View>
    </View>
  );
}
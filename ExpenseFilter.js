import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { filterByName, filterByDate, filterByAmount } from "./store/reducers/expenseReducer";

export default function ExpenseFilter({ dispatch }) {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [filterName, setFilterName] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const toggleFilters = () => {
    setIsFiltersVisible((prev) => !prev);
  };

  const applyFilters = () => {
    console.log('Filter applied:', { filterName, minAmount, maxAmount, startDate, endDate });

    if (filterName) dispatch(filterByName({ name: filterName }));
    if (minAmount || maxAmount) dispatch(filterByAmount({ minAmount, maxAmount }));
    if (startDate && endDate) dispatch(filterByDate({ startDate, endDate }));
  };

  return (
    <View style={styles.container}>
      {/* Conditionally render button text */}
      <Button
        title={isFiltersVisible ? "Hide Filters" : "Show Filters"}
        onPress={toggleFilters}
      />

      {isFiltersVisible && (
        <View style={styles.filterOptions}>
          <Text style={styles.filterText}>Filter by Name:</Text>
          <TextInput
            style={styles.input}
            value={filterName}
            onChangeText={setFilterName}
            placeholder="Enter expense name"
          />
          <Text style={styles.filterText}>Filter by Amount:</Text>
          <TextInput
            style={styles.input}
            value={minAmount}
            onChangeText={setMinAmount}
            placeholder="Min amount"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={maxAmount}
            onChangeText={setMaxAmount}
            placeholder="Max amount"
            keyboardType="numeric"
          />
          <Text style={styles.filterText}>Filter by Date:</Text>
          <TextInput
            style={styles.input}
            value={startDate}
            onChangeText={setStartDate}
            placeholder="Start date"
          />
          <TextInput
            style={styles.input}
            value={endDate}
            onChangeText={setEndDate}
            placeholder="End date"
          />
          <Button title="Apply Filters" onPress={applyFilters} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  filterOptions: {
    marginTop: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    width: '100%',
  },
  filterText: {
    fontSize: 18,
    color: '#333',
  },
  input: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
  },
});

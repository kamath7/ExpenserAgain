import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function SimpleForm({
  onSubmit,
  expenseName,
  setExpenseName,
  expenseAmount,
  setExpenseAmount,
  expenseDate,
  setExpenseDate,
}) {
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Ensure that expenseDate is initialized as a Date object
  if (!(expenseDate instanceof Date)) {
    setExpenseDate(new Date()); // Fallback to current date if it's not a Date object
  }

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || expenseDate;
    setShowDatePicker(false);
    setExpenseDate(currentDate); // Ensure expenseDate is a Date object
  };

  const handleSubmit = () => {
    if (expenseName && expenseAmount) {
      const expenseData = {
        name: expenseName,
        amount: expenseAmount,
        date: expenseDate.toLocaleDateString(), // This should work if expenseDate is a valid Date object
      };
      onSubmit(expenseData); // Call the onSubmit prop with expense data
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter Expense Details</Text>

      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={expenseName}
        onChangeText={setExpenseName}
      />

      <Text style={styles.label}>Amount (₹):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount in Rupees"
        keyboardType="numeric"
        value={expenseAmount}
        onChangeText={setExpenseAmount}
      />

      <Text style={styles.label}>Date:</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <TextInput
          style={styles.input}
          placeholder="Select date"
          value={expenseDate ? expenseDate.toLocaleDateString() : ''}
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={expenseDate} // Ensure this is a Date object
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <View style={styles.buttonContainer}>
        <Button title="Save Expense" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
    textAlign: 'center',
  },
  label: {
    fontSize: 20,
    marginBottom: 12,
    color: '#333',
  },
  input: {
    height: 55,
    fontSize: 20,
    borderColor: '#ccc',
    borderWidth: 1.5,
    marginBottom: 25,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
});
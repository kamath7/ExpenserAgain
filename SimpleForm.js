import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function SimpleForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleSubmit = () => {
    if (name && amount) {
      const expenseData = {
        name,
        amount,
        date: date.toLocaleDateString(),
      };
      onSubmit(expenseData);  // Call the onSubmit prop with expense data
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
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text style={styles.label}>Amount (₹):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount in Rupees"
        keyboardType="numeric"
        value={amount}
        onChangeText={text => setAmount(text)}
      />

      <Text style={styles.label}>Date:</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <TextInput
          style={styles.input}
          placeholder="Select date"
          value={date.toLocaleDateString()}
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
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
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 50,
    fontSize: 18,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

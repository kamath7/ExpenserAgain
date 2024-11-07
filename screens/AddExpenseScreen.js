import React from 'react';
import { View, StyleSheet } from 'react-native';
import SimpleForm from '../SimpleForm';

export default function AddExpenseScreen({ navigation, addExpense }) {
  const handleFormSubmit = (expenseData) => {
    addExpense(expenseData);          
    navigation.navigate('ExpenseList'); 
  };

  return (
    <View style={styles.container}>
      <SimpleForm onSubmit={handleFormSubmit} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

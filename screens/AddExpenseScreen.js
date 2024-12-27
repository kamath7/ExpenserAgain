import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import SimpleForm from '../SimpleForm';
import { addExpense } from '../store/reducers/expenseReducer';

export default function AddExpenseScreen({ navigation }) {
  const dispatch = useDispatch();

  const handleFormSubmit = (expenseData) => {
    if (expenseData.name && expenseData.amount && expenseData.date) {
      dispatch(addExpense(expenseData));
      navigation.navigate('ExpenseList');
    } else {
      alert('Please provide all expense details.');
    }
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
  },
});

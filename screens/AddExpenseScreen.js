import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux'; 
import SimpleForm from '../SimpleForm';
import { addExpense } from '../store/reducers/expenseReducer';

export default function AddExpenseScreen({ navigation }) {
  const dispatch = useDispatch(); 

  const handleFormSubmit = (expenseData) => {
    dispatch(addExpense(expenseData)); 
    navigation.navigate('ExpenseList');
  };

  return (
    <View style={styles.container}>
      <SimpleForm onSubmit={handleFormSubmit} />
    </View>
  );
}
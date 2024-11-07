import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ExpensesList from '../ExpenseList';

export default function ExpenseListScreen({ navigation, expenses }) {
  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 10,
  },
});

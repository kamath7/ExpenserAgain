import { StyleSheet, Text, View } from 'react-native';
import SimpleForm from './SimpleForm';
import ExpenseList from './ExpenseList';
import { useState } from 'react';

export default function App() {

  const [expenses, setExpenses] = useState([]);

  const addExpense = (name, amount, date) => {
    setExpenses(prevExpenses => [
      ...prevExpenses,
      { id: Date.now().toString(), name, amount, date: date.toLocaleDateString() },
    ]);
  };

  return (
    <View style={styles.container}>
   
        <SimpleForm addExpense={addExpense}/>
        <ExpenseList expenses={expenses}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
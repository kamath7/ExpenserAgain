import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExpenseListScreen from './screens/ExpenseListScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';

const Stack = createStackNavigator();

export default function App() {
  const [expenses, setExpenses] = useState([]);

  // Function to add a new expense
  const addExpense = (expense) => {
    setExpenses((currentExpenses) => [...currentExpenses, expense]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ExpenseList">
        <Stack.Screen
          name="ExpenseList"
          options={{ title: 'Saved Expenses' }}
        >
          {(props) => (
            <ExpenseListScreen
              {...props}
              expenses={expenses} 
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="AddExpense"
          options={{ title: 'Add New Expense' }}
        >
          {(props) => (
            <AddExpenseScreen
              {...props}
              addExpense={addExpense} 
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

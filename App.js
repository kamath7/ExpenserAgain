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
          options={{ headerShown: false }} // Remove title
        >
          {(props) => (
            <ExpenseListScreen
              {...props}
              expenses={expenses}  // Pass the expenses to ExpenseListScreen
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="AddExpense"
          options={{ headerShown: false }} // Remove title
        >
          {(props) => (
            <AddExpenseScreen
              {...props}
              addExpense={addExpense}  // Pass addExpense function to AddExpenseScreen
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
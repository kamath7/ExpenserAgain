import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'; 
import store from './store/store';

import ExpenseListScreen from './screens/ExpenseListScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ExpenseList">
          <Stack.Screen
            name="ExpenseList"
            options={{ headerShown: false }}
          >
            {(props) => <ExpenseListScreen {...props} />} 
          </Stack.Screen>
          <Stack.Screen
            name="AddExpense"
            options={{ headerShown: false }}
          >
            {(props) => <AddExpenseScreen {...props} />} 
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
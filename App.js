import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./store/store";

import ExpenseListScreen from "./screens/ExpenseListScreen";
import AddExpenseScreen from "./screens/AddExpenseScreen";
import EditExpenseScreen from "./screens/EditExpenseScreen"; // Import the new EditExpenseScreen

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ExpenseList">
          <Stack.Screen
            name="ExpenseList"
            options={{
              headerShown: false,
            }}
            component={ExpenseListScreen}
          />
          <Stack.Screen
            name="AddExpense"
            options={{
              headerShown: false,
            }}
            component={AddExpenseScreen}
          />
          <Stack.Screen
            name="EditExpense"
            options={{
              headerShown: false,
            }}
            component={EditExpenseScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ExpenseList({ expenses }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Saved Expenses</Text>
      <FlatList
        data={expenses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text style={styles.expenseText}>Name: {item.name}</Text>
            <Text style={styles.expenseText}>Amount: ₹{item.amount}</Text>
            <Text style={styles.expenseText}>Date: {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  expenseItem: {
    padding: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  expenseText: {
    fontSize: 16,
  },
});

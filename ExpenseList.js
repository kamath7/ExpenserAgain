import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ExpenseList({ expenses }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        keyExtractor={item => item.id.toString()}
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
    marginTop: 20,
    backgroundColor: '#f9f9f9',
  },
  expenseItem: {
    padding: 15,
    marginBottom: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  expenseText: {
    fontSize: 16,
    color: '#333',
  },
});

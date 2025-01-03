import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function ExpenseList({ expenses, onPressItem, onLongPressItem }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.expenseItem}
            onPress={() => onPressItem(item)}
            onLongPress={() => onLongPressItem(item.id)}
          >
            <Text style={styles.expenseText}>Name: {item.name}</Text>
            <Text style={styles.expenseText}>Amount: ₹{item.amount}</Text>
            <Text style={styles.expenseText}>Date: {item.date}</Text>
          </TouchableOpacity>
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

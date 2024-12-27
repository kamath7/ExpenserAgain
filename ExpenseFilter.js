import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterByName,
  filterByDate,
  filterByAmount,
  clearFilters,
} from "./store/reducers/expenseReducer";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

const ExpenseFilter = () => {
  const [showFilters, setShowFilters] = useState(false);
  const dispatch = useDispatch();

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <View style={styles.filterContainer}>
      <Button
        title={showFilters ? "Hide Filters" : "Show Filters"}
        onPress={toggleFilters}
        color="#007BFF"
      />

      {showFilters && (
        <View style={styles.filters}>
          <View style={styles.filterGroup}>
            <Text>Filter by Name:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => dispatch(filterByName({ name: text }))}
            />
          </View>
          <View style={styles.filterGroup}>
            <Text>Filter by Date:</Text>
            <View style={styles.dateInputs}>
              <TextInput
                style={styles.input}
                placeholder="Start Date"
                onChangeText={(text) =>
                  dispatch(filterByDate({ startDate: text, endDate: null }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="End Date"
                onChangeText={(text) =>
                  dispatch(filterByDate({ startDate: null, endDate: text }))
                }
              />
            </View>
          </View>
          <View style={styles.filterGroup}>
            <Text>Filter by Amount:</Text>
            <View style={styles.amountInputs}>
              <TextInput
                style={styles.input}
                placeholder="Min Amount"
                keyboardType="numeric"
                onChangeText={(text) =>
                  dispatch(filterByAmount({ minAmount: text, maxAmount: null }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Max Amount"
                keyboardType="numeric"
                onChangeText={(text) =>
                  dispatch(filterByAmount({ minAmount: null, maxAmount: text }))
                }
              />
            </View>
          </View>
          <Button
            title="Clear Filters"
            onPress={() => dispatch(clearFilters())}
            color="#DC3545"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    marginBottom: 20,
  },
  filters: {
    marginTop: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  filterGroup: {
    marginBottom: 15,
  },
  input: {
    padding: 5,
    marginTop: 5,
    width: "100%",
    maxWidth: 300,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  dateInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amountInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ExpenseFilter;

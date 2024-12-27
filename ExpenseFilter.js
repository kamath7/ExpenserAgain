import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ExpenseFilter() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const toggleFilters = () => {
    setIsFiltersVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Button title="Show Filters" onPress={toggleFilters} />

      {isFiltersVisible && (
        <View style={styles.filterOptions}>
          <Text style={styles.filterText}>Filter by Category:</Text>
          {/* Add filter options here */}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingVertical: 20,
      alignItems: "center",
      marginBottom: 20,
    },
    filterOptions: {
      marginTop: 10,
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
      padding: 10,
      width: '100%',
    },
    filterText: {
      fontSize: 18,
      color: '#333',
    },
  });
  

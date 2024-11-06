import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function SimpleForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (name && email) {
      Alert.alert('Form Submitted!', `Name: ${name}\nEmail: ${email}`);
    } else {
      Alert.alert('Error', 'Please fill out all fields');
    }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.header}>Enter your details</Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        placeholderTextColor="#888"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  header: {
  fontSize: 28, // Large font size for visibility
  fontWeight: 'bold', // Bold to emphasize the header
  textAlign: 'center', // Center align for a balanced look
  color: '#333', // Dark color for contrast
  marginBottom: 30, // Space below the header
  paddingVertical: 10, // Vertical padding for more height
  backgroundColor: '#f0f0f0', // Light background to make it stand out
  borderRadius: 10, // Rounded corners for style
},
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30, // Increased padding for more spacing
  },
  label: {
    fontSize: 20, // Larger label text
    marginBottom: 12,
  },
  input: {
    height: 50, // Increased height for input
    fontSize: 18, // Larger input text
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15, // Increased padding for input text
    borderRadius: 8, // Rounded corners for inputs
  },
  buttonContainer: {
    marginTop: 10, // Space above the button
    width: '60%', // Smaller button width for better look
    alignSelf: 'center', // Center the button
  },
});

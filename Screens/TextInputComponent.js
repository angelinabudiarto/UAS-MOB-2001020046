import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextInputComponent = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textField}
        onChangeText={onChangeText}
        value={value}
        placeholder="Update To Do"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 10,
  },
  textField: {
    fontSize: 15,
    color: '#000000',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
});

export default TextInputComponent;

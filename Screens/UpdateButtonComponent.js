import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const UpdateButtonComponent = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonUpdate} onPress={onPress}>
        <Text>Update Todo</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonUpdate: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 10,
    backgroundColor: '#0de065',
  },
});

export default UpdateButtonComponent;

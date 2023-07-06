import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { firebase } from '../config';
import { useNavigation } from '@react-navigation/native';
import TextInputComponent from './TextInputComponent';
import UpdateButtonComponent from './UpdateButtonComponent';

const Detail = ({ route }) => {
  const todoRef = firebase.firestore().collection('todos');
  const [textHeading, onChangeTextHeading] = useState(route.params.item.name);
  const navigation = useNavigation();

  const updateTodo = () => {
    if (textHeading && textHeading.length > 0) {
      todoRef
        .doc(route.params.item.id)
        .update({
          heading: textHeading,
        })
        .then(() => {
          navigation.navigate('Home');
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  return (
    <View style={styles.container}>
      <TextInputComponent
        value={textHeading}
        onChangeText={onChangeTextHeading}
      />
      <UpdateButtonComponent onPress={updateTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginLeft: 15,
    marginRight: 15,
  },
});

export default Detail;

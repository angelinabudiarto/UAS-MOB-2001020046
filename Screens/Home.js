import React, { useState, useEffect } from 'react';
import { View, Keyboard, Alert } from 'react-native';
import { firebase } from '../config';
import { useNavigation } from '@react-navigation/native';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const todoRef = firebase.firestore().collection('todos');
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = todoRef
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const todos = [];
        querySnapshot.forEach((doc) => {
          const { heading } = doc.data();
          todos.push({
            id: doc.id,
            heading,
          });
        });
        setTodos(todos);
      });

    return () => unsubscribe();
  }, []);

  const deleteTodo = (todo) => {
    todoRef
      .doc(todo.id)
      .delete()
      .then(() => {
        Alert.alert('Deleted Successfully');
      })
      .catch((error) => {
        alert(error);
      });
  };

  const addTodo = (heading) => {
    if (heading && heading.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        heading,
        createdAt: timestamp,
      };
      todoRef
        .add(data)
        .then(() => {
          Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      Alert.alert('Error', 'Please enter a task');
    }
  };

  const navigateToDetail = (todo) => {
    navigation.navigate('Detail', { item: todo });
  };

  return (
    <View style={{ flex: 1 }}>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        navigateToDetail={navigateToDetail}
      />
    </View>
  );
};

export default Home;

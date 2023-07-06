import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TodoList = ({ todos, deleteTodo, navigateToDetail }) => {
  const renderItem = ({ item }) => (
    <View>
      <Pressable style={styles.container} onPress={() => navigateToDetail(item)}>
        <FontAwesome
          name="trash-o"
          color="red"
          onPress={() => deleteTodo(item)}
          style={styles.todoIcon}
        />
        <View style={styles.innerContainer}>
          <Text style={styles.itemHeading}>{item.heading}</Text>
        </View>
      </Pressable>
    </View>
  );

  return (
    <FlatList
      data={todos}
      numColumns={1}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 45,
  },
  itemHeading: {
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 22,
  },
  todoIcon: {
    marginTop: 5,
    fontSize: 20,
    marginLeft: 14,
  },
});

export default TodoList;

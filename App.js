import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { AddTodo } from './src/components/AddTodo';
import { Navbar } from './src/components/Navbar';
import { Todo } from './src/components/Todo';

export default function App() {
  const [todo, setTodo] = useState([]);

  const addTodoItem = (title) => {
    setTodo([{ id: Date.now().toString(), title }, ...todo]);
  };

  const removeTodo = (todoId) => {
    setTodo(todo.filter((todo) => todo.id !== todoId));
  };

  return (
    <View>
      <StatusBar style="light" />
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo addTodoItem={addTodoItem} />

        <FlatList
          keyExtractor={(item) => item.id}
          data={todo}
          renderItem={({ item }) => (
            <Todo todo={item} removeTodo={removeTodo} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {},
});

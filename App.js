import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Navbar} from './src/components/Navbar';
import {TodoScreen} from "./src/screens/TodoScreen";
import {MainScreen} from "./src/screens/MainScreen";
import {v1} from "react-native-uuid/dist/v1";

export default function App() {
    const [todoId, setTodoId] = useState(null)
    const [todos, setTodos] = useState([
        {id: v1(), title: 'React'},
        {id: v1(), title: 'Redux'},
        {id: v1(), title: 'JS'},
        {id: v1(), title: 'Rest Api'},
    ]);


    const addTodoItem = (title) => {
        setTodos([{id: v1(), title}, ...todos]);
    };

    const removeTodo = (todoId) => {
        setTodos(todos.filter((todo) => todo.id !== todoId));
    };


    let content = <MainScreen todos={todos}
                              addTodoItem={addTodoItem}
                              removeTodo={removeTodo}
                              onScreen={setTodoId}
    />

    if (todoId) {
        let currentTodo = todos.find(todo => todo.id === todoId)
        content = <TodoScreen goBack={() => setTodoId(null)}
                              todo={currentTodo}
        />
    }

    return (
        <View>
            <StatusBar style="light"/>
            <Navbar title="Todo App"/>
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
});

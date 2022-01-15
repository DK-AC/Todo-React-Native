import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Navbar} from './src/components/Navbar';
import {TodoScreen} from "./src/screens/TodoScreen";
import {MainScreen} from "./src/screens/MainScreen";

export default function App() {
    const [todo, setTodo] = useState([]);
    const [todoId, setTodoId] = useState(null)

    const addTodoItem = (title) => {
        setTodo([{id: Date.now().toString(), title}, ...todo]);
    };

    const removeTodo = (todoId) => {
        setTodo(todo.filter((todo) => todo.id !== todoId));
    };

    let content = <MainScreen todo={todo} addTodoItem={addTodoItem} removeTodo={removeTodo}/>

    if (todoId) {
        content = <TodoScreen/>
    }

    return (
        <View>
            <StatusBar style="light"/>
            <Navbar title="Todo App"/>
            {content}
        </View>);
}

const styles = StyleSheet.create({});

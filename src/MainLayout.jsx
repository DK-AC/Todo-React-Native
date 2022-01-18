import {StatusBar} from "expo-status-bar";
import {Navbar} from "./components/Navbar";
import {Alert, StyleSheet, View} from "react-native";
import {Theme} from "./variables/theme";
import {v1} from "react-native-uuid/dist/v1";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import React, {useContext, useState} from "react";
import {TodoContext} from "./context/todo/todoContext";

export const MainLayout = () => {

    const [todoId, setTodoId] = useState(null)
    const [todos, setTodos] = useState([]);
    const todoContext = useContext(TodoContext)

    const addTodoItem = (title) => {
        setTodos([{id: v1(), title}, ...todos]);
    };

    const removeTodo = (todoId) => {
        const todo = todos.find(td => td.id === todoId)
        Alert.alert(
            `${todo.title} будет удалено `,
            `Вы действительно хотите удалить ${todo.title}?`,
            [
                {
                    text: "Отмена",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Удалить",
                    onPress: () => {
                        setTodoId(null)
                        setTodos(todos.filter((todo) => todo.id !== todoId)
                        )
                    }
                }
            ]
        );
    };
    const changeTitle = (id, title) => {
        setTodos(todos.map(td => td.id === id
            ? {...td, title: title}
            : td)
        )
    }
    const changeSetTodoId = () => setTodoId(null)


    let content = <MainScreen todos={todoContext.todos}
                              addTodoItem={addTodoItem}
                              removeTodo={removeTodo}
                              onScreen={setTodoId}
    />

    if (todoId) {

        let currentTodo = todoContext.todos.find(td => td.id === todoId)

        content = <TodoScreen goBack={changeSetTodoId}
                              removeTodo={removeTodo}
                              todo={currentTodo}
                              changeTitle={changeTitle}
        />
    }

    return (
        <View>
            <StatusBar style="light"/>
            <Navbar title="Todo App"/>
            <View style={styles.container}>
                {content}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Theme.PADDING_HORIZONTAL,
        paddingVertical: 20
    },
});
import {StatusBar} from "expo-status-bar";
import {Navbar} from "./components/Navbar";
import {StyleSheet, View} from "react-native";
import {Theme} from "./variables/theme";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import React, {useContext} from "react";
import {TodoContext} from "./context/todo/todoContext";
import {ScreenContext} from "./context/screen/screenContext";

export const MainLayout = () => {

    const {todoId, changeScreen} = useContext(ScreenContext)
    const {todos, addTodo, removeTodo, updateTodoTitle} = useContext(TodoContext)


    // const removeTodo = (todoId) => {
    //     const todo = todos.find(td => td.id === todoId)
    //     Alert.alert(
    //         `${todo.title} будет удалено `,
    //         `Вы действительно хотите удалить ${todo.title}?`,
    //         [
    //             {
    //                 text: "Отмена",
    //                 onPress: () => console.log("Cancel Pressed"),
    //                 style: "cancel"
    //             },
    //             {
    //                 text: "Удалить",
    //                 onPress: () => {
    //                     setTodoId(null)
    //                     setTodos(todos.filter((todo) => todo.id !== todoId)
    //                     )
    //                 }
    //             }
    //         ]
    //     );
    // };

    const changeSetTodoId = () => changeScreen(null)


    let content = <MainScreen todos={todos}
                              addTodo={addTodo}
                              removeTodo={removeTodo}
                              onScreen={changeScreen}
    />

    if (todoId) {
        const currentTodo = todos.find(td => td.id === todoId)

        content = <TodoScreen goBack={changeSetTodoId}
                              removeTodo={removeTodo}
                              todo={currentTodo}
                              updateTodoTitle={updateTodoTitle}
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
import {StatusBar} from "expo-status-bar";
import {Navbar} from "./components/Navbar";
import {StyleSheet, View} from "react-native";
import {Theme} from "./variables/theme";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import React, {useContext} from "react";
import {ScreenContext} from "./context/screen/screenContext";

export const MainLayout = () => {

    const {todoId} = useContext(ScreenContext)

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


    return (
        <View>
            <StatusBar style="light"/>
            <Navbar title="Todo App"/>
            <View style={styles.container}>
                {todoId ? <TodoScreen/> : <MainScreen/>}
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
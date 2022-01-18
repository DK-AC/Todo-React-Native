import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Theme} from "../variables/theme";
import {AppTextBold} from "./ui/AppTextBold";

export const Todo = ({todo, removeTodo, onScreen}) => {

    const removeTodoHandler = () => removeTodo(todo.id)
    const changeViewTodoScreenHandler = () => onScreen(todo.id)

    return (
        <TouchableOpacity onLongPress={removeTodoHandler}
                          onPress={changeViewTodoScreenHandler}
        >
            <View style={styles.todo}>
                <AppTextBold>{todo.title}</AppTextBold>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    todo: {
        marginTop: 10,
        borderColor: Theme.MAIN_COLOR,
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
    },
});

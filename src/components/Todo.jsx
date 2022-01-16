import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Theme} from "../variables/theme";

export const Todo = ({todo, removeTodo, onScreen}) => {

    const removeTodoHandler = () => removeTodo(todo.id)
    const changeViewTodoScreenHandler = () => onScreen(todo.id)

    return (
        <TouchableOpacity onLongPress={removeTodoHandler}
                          onPress={changeViewTodoScreenHandler}
        >
            <View style={styles.todo}>
                <Text style={styles.item}>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    todo: {
        marginTop: 10,
        borderColor: Theme.Main_Color,
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
    },
});

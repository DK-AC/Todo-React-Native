import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Todo = ({todo, removeTodo, onScreen}) => {
    return (
        <TouchableOpacity onLongPress={() => removeTodo(todo.id)}
                          onPress={() => onScreen(todo.id)}
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
        borderColor: '#3949ab',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
    },
});

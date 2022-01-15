import React from 'react';
import {AddTodo} from "../components/AddTodo";
import {FlatList, StyleSheet, View} from "react-native";
import {Todo} from "../components/Todo";


export const MainScreen = ({todos, addTodoItem, removeTodo, onScreen}) => {
    return (
        <View style={styles.container}>
            <AddTodo addTodoItem={addTodoItem}/>

            <FlatList
                keyExtractor={(item) => item.id}
                data={todos}
                renderItem={({item}) => (
                    <Todo todo={item} removeTodo={removeTodo} onScreen={onScreen}/>
                )}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
})

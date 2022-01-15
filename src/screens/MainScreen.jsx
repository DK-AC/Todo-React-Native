import React from 'react';
import {AddTodo} from "../components/AddTodo";
import {FlatList, StyleSheet, View} from "react-native";
import {Todo} from "../components/Todo";


export const MainScreen = ({todo, addTodoItem, removeTodo}) => {
    return (
        <View style={styles.container}>
            <AddTodo addTodoItem={addTodoItem}/>

            <FlatList
                keyExtractor={(item) => item.id}
                data={todo}
                renderItem={({item}) => (
                    <Todo todo={item} removeTodo={removeTodo}/>
                )}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 20,
    }, text: {},
})

import React from 'react';
import {AddTodo} from "../components/AddTodo";
import {FlatList, Image, StyleSheet, View} from "react-native";
import {Todo} from "../components/Todo";


export const MainScreen = ({todos, addTodoItem, removeTodo, onScreen}) => {
    let content = (
        <FlatList
            keyExtractor={(item) => item.id}
            data={todos}
            renderItem={({item}) => <Todo todo={item}
                                          removeTodo={removeTodo}
                                          onScreen={onScreen}/>
            }
        />)

    if (todos.length === 0) {
        content = (
            <View style={styles.imageWrap}>
                <Image style={styles.image}
                       source={require('../../assets/no-items.png')}
                />
            </View>)
    }

    return (
        <View>
            <AddTodo addTodoItem={addTodoItem}/>
            {content}
        </View>
    );
};


const styles = StyleSheet.create({
    imageWrap: {
        height: 300,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})

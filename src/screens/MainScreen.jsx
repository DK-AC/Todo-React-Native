import React, {useCallback, useContext, useEffect, useState} from 'react';
import {AddTodo} from "../components/AddTodo";
import {Dimensions, FlatList, Image, StyleSheet, View} from "react-native";
import {Todo} from "../components/Todo";
import {Theme} from "../variables/theme";
import {ScreenContext} from "../context/screen/screenContext";
import {TodoContext} from "../context/todo/todoContext";
import {AppLoader} from "../components/ui/AppLoader";
import {AppText} from "../components/ui/AppText";
import {AppButton} from "../components/ui/AppButton";


export const MainScreen = () => {

    const {changeScreen} = useContext(ScreenContext)
    const {todos, addTodo, removeTodo, fetchTodos, error, loading} = useContext(TodoContext)

    const [deviceWidth, setDeviceWidth] = useState(
        Dimensions.get('window').width - Theme.PADDING_HORIZONTAL * 2)

    const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos])

    useEffect(() => {
        loadTodos()
    }, [])

    useEffect(() => {
        const update = () => {
            setDeviceWidth(Dimensions.get('window').width - Theme.PADDING_HORIZONTAL * 2)
        }
        Dimensions.addEventListener('change', () => update)
        return () => Dimensions.removeEventListener('change', () => update)
    })


    let content = (
        <View style={{width: deviceWidth}}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={todos}
                renderItem={({item}) => <Todo todo={item}
                                              removeTodo={removeTodo}
                                              onScreen={changeScreen}/>
                }
            />
        </View>)

    if (todos.length === 0) {
        content = (
            <View style={styles.imageWrap}>
                <Image style={styles.image}
                       source={require('../../assets/no-items.png')}
                />
            </View>)
    }


    if (loading) {
        return <AppLoader/>
    }

    if (error) {
        return (
            <View style={styles.center}>
                <AppText style={styles.text}>{error}</AppText>
                <AppButton onPress={loadTodos}>Повторить</AppButton>
            </View>)
    }

    return (
        <View>
            <AddTodo addTodoItem={addTodo}/>
            {content}
        </View>
    );
};


const styles = StyleSheet.create({
    imageWrap: {
        height: 300,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: Theme.RED_COLOR,
        marginBottom:20
    }
})

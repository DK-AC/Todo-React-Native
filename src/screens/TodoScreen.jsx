import React, {useContext, useState} from 'react';
import {Dimensions, StyleSheet, View} from "react-native";
import {Theme} from "../variables/theme";
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";
import {AppText} from "../components/ui/AppText";
import {AppButton} from "../components/ui/AppButton";
import {AntDesign} from '@expo/vector-icons';
import {ScreenContext} from "../context/screen/screenContext";
import {TodoContext} from "../context/todo/todoContext";


export const TodoScreen = () => {

    const [modal, setModal] = useState(false)
    const {todoId, changeScreen} = useContext(ScreenContext)
    const {todos, removeTodo, updateTodoTitle} = useContext(TodoContext)

    const todo = todos.find(td => td.id === todoId)
    const changeTitleHandler = (title) => updateTodoTitle(todo.id, title)
    const changeSetModalHandler = () => setModal(true)
    const removeTodoHandler = () => {
        removeTodo(todo.id)
    }

    return (
        <View>
            <EditModal visible={modal}
                       changeVisible={setModal}
                       title={todo.title}
                       changeTitle={changeTitleHandler}
            />
            <AppCard style={styles.card}>
                <AppText style={styles.title}>{todo.title}</AppText>
                <AppButton color={Theme.MAIN_COLOR}
                           onPress={changeSetModalHandler}
                >
                    <AntDesign name="edit" size={24} color="white"/>
                </AppButton>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton color={Theme.GREY_COLOR}
                               onPress={()=>changeScreen(null)}
                    >
                        <AntDesign name="back" size={24} color="white"/>
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton color={Theme.RED_COLOR}
                               onPress={removeTodoHandler}
                    >
                        <AntDesign name="delete" size={24} color="white"/>
                    </AppButton>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: Dimensions.get("window").width > 400 ? 150 : 100
    },
    card: {
        marginBottom: 20,
        padding: 15,
    },
    title: {
        fontSize: 25,
    }
})

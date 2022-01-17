import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import {Theme} from "../variables/theme";
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";
import {AppText} from "../components/ui/AppText";


export const TodoScreen = ({goBack, todo, removeTodo, changeTitle}) => {
    const [modal, setModal] = useState(false)

    const changeTitleHandler = (title) => changeTitle(todo.id, title)
    const changeSetModalHandler = () => setModal(true)
    const removeTodoHandler = () => removeTodo(todo.id)

    return (
        <View>
            <EditModal visible={modal}
                       changeVisible={setModal}
                       title={todo.title}
                       changeTitle={changeTitleHandler}
            />
            <AppCard style={styles.card}>
                <AppText style={styles.title}>{todo.title}</AppText>
                <Button title={'Ред.'}
                        onPress={changeSetModalHandler}
                />
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title={'Назад'}
                            onPress={goBack}
                            color={Theme.Grey_Color}
                    />
                </View>
                <View style={styles.button}>
                    <Button color={Theme.Red_Color}
                            title={'удалить'}
                            onPress={removeTodoHandler}
                    />
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
        width: `40%`
    },
    card: {
        marginBottom: 20,
        padding: 15,
    },
    title: {
        fontSize: 25,
    }
})

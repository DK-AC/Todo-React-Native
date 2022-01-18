import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from "react-native";
import {Theme} from "../variables/theme";
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";
import {AppText} from "../components/ui/AppText";
import {AppButton} from "../components/ui/AppButton";
import {AntDesign} from '@expo/vector-icons';


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
                <AppButton color={Theme.MAIN_COLOR}
                           onPress={changeSetModalHandler}
                >
                    <AntDesign name="edit" size={24} color="white"/>
                </AppButton>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton color={Theme.GREY_COLOR}
                               onPress={goBack}
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

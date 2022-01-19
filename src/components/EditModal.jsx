import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, TextInput, View} from "react-native";
import {Theme} from "../variables/theme";
import {AppButton} from "./ui/AppButton";

export const EditModal = ({visible, changeVisible, title, changeTitle}) => {

    const [value, setValue] = useState(title)

    const saveTitleHandler = () => {

        if (value.trim().length < 2) {
            Alert.alert(`Ошибка`, `Минимальная длина названия 2 символа. Сейчас ${value.length} символ`,);
        } else {
            changeTitle(value)
            changeVisible(false)

        }

    }
    const changeVisibleModal = () => {
        changeVisible(false)
        setValue(title)
    }

    return (
        <Modal visible={visible} animationType="slide" transparent={false}>
            <View style={styles.wrap}>
                <TextInput style={styles.input}
                           placeholder={'введите название дела'}
                           autoCapitalize='none'
                           maxLength={64}
                           autoCorrect={false}
                           value={value}
                           onChangeText={setValue}
                />
                <View style={styles.buttons}>
                    <AppButton color={Theme.GREY_COLOR}
                               title={'Отменить'}
                               onPress={changeVisibleModal}
                    >
                        Отменить
                    </AppButton>
                    <AppButton title={'Сохранить'}
                               onPress={saveTitleHandler}
                    >
                        Сохранить
                    </AppButton>
                </View>
            </View>
        </Modal>)
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, buttons: {
        width: '80%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }, input: {
        padding: 10,
        borderRadius: 2,
        borderBottomColor: Theme.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    }
})
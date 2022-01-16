import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import {Theme} from "../theme";


export const TodoScreen = ({goBack, todo}) => {
    return (
        <View style={styles.container}>
            <Text>{todo.title}</Text>
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
                            onPress={() => console.log('delete')}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: `40%`
    }
})

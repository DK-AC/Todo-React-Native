import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";


export const TodoScreen = ({goBack, todo}) => {
    return (
        <View style={styles.container}>
            <Text>{todo.title}</Text>
            <Button title={'Назад'} onPress={goBack}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    }, text: {},
})

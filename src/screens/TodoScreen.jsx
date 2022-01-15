import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";


export const TodoScreen = ({goBack, todo}) => {
    return (
        <View style={styles.container}>
            <Text>{todo.title}</Text>
            <View style={styles.fixToText}>
                <Button title={'Назад'} onPress={goBack}/>
                <Button color={'red'} title={'удалить'} onPress={()=>{}}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    fixToText:{
        flexDirection:'row',
        justifyContent: 'center',
    }
})

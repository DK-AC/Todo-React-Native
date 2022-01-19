import React from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import {Theme} from "../../variables/theme";


export const AppLoader = () => {
    return (
        <View style={styles.center}>
            <ActivityIndicator size={'large'} color={Theme.MAIN_COLOR}/>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
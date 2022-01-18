import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native"
import {Theme} from "../../variables/theme";
import {AppTextBold} from "./AppTextBold";


export const AppButton = ({children, onPress, color = Theme.MAIN_COLOR}) => {
    return (
        <TouchableOpacity onPress={onPress} opacity={0.7}>
            <View style={{...styles.button, backgroundColor: color}}>
                <AppTextBold style={styles.text}>{children}</AppTextBold>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        flexDirection: 'row'
    },
    text: {
        color: 'white'
    }
})
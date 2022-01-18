import React from "react";
import {Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View} from "react-native"
import {Theme} from "../../variables/theme";
import {AppTextBold} from "./AppTextBold";


export const AppButton = ({children, onPress, color = Theme.MAIN_COLOR}) => {

    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

    return (
        <Wrapper onPress={onPress} opacity={0.7}>
            <View style={{...styles.button, backgroundColor: color}}>
                <AppTextBold style={styles.text}>{children}</AppTextBold>
            </View>
        </Wrapper>
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
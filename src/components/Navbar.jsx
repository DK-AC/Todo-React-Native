import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Theme} from "../variables/theme";
import {AppTextBold} from "./ui/AppTextBold";

export const Navbar = ({title}) => {
    return (
        <View style={styles.navbar}>
            <AppTextBold style={styles.text}>{title}</AppTextBold>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.Main_Color,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
});

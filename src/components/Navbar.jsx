import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Theme} from "../variables/theme";
import {AppTextBold} from "./ui/AppTextBold";

export const Navbar = ({title}) => {


    return (
        <View style={{
            ...styles.navbar,
            ...Platform.select({
                ios: styles.navbarIos,
                android: styles.navbarAndroid
            })
        }}>
            <AppTextBold style={styles.text}>{title}</AppTextBold>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10
    },
    navbarAndroid: {
        backgroundColor: Theme.MAIN_COLOR,
    },
    navbarIos: {
        borderBottomColor: Theme.MAIN_COLOR,
        borderBottomWidth: 1,
    },
    text: {
        color: Platform.OS === 'ios' ? Theme.MAIN_COLOR : 'white',
        fontSize: 20,
    },
});

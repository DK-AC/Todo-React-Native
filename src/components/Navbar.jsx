import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Theme} from "../variables/theme";

export const Navbar = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
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

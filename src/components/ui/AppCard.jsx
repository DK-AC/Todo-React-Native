import React from 'react';
import {StyleSheet, View} from 'react-native';

export const AppCard = (props) => {
    return (
        <View style={{...styles.default, ...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    default: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        borderRadius: 10,
        padding: 20,
        elevation: 8,
        shadowColor:'#000',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {width: 2, height: 2},
        fontSize: 20,
        backgroundColor: '#fff'
    }
});


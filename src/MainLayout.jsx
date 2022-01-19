import {StatusBar} from "expo-status-bar";
import {Navbar} from "./components/Navbar";
import {StyleSheet, View} from "react-native";
import {Theme} from "./variables/theme";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import React, {useContext} from "react";
import {ScreenContext} from "./context/screen/screenContext";

export const MainLayout = () => {

    const {todoId} = useContext(ScreenContext)

    return (
        <View style={styles.wrapper}>
            <StatusBar style="light"/>
            <Navbar title="Todo App"/>
            <View style={styles.container}>
                {todoId ? <TodoScreen/> : <MainScreen/>}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Theme.PADDING_HORIZONTAL,
        paddingVertical: 20,
        flex: 1
    },
    wrapper: {
        flex: 1
    }
});
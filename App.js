import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Navbar} from './src/components/Navbar';
import {TodoScreen} from "./src/screens/TodoScreen";
import {MainScreen} from "./src/screens/MainScreen";
import {v1} from "react-native-uuid/dist/v1";
import {useFonts} from "expo-font"

export default function App() {
    const [todoId, setTodoId] = useState(null)
    const [todos, setTodos] = useState([
        {id: v1(), title: 'React'},
        {id: v1(), title: 'Redux'},
        {id: v1(), title: 'JS'},
        {id: v1(), title: 'Rest Api'},
    ]);
    const [loaded] = useFonts({
        Roboto_Regular: require('./assets/fonts/Roboto-Regular.ttf'),
        Roboto_Bold: require('./assets/fonts/Roboto-Bold.ttf'),
    })

    if (!loaded) {
        return null
    }


    const addTodoItem = (title) => {
        setTodos([{id: v1(), title}, ...todos]);
    };

    const removeTodo = (todoId) => {
        const todo = todos.find(td => td.id === todoId)
        Alert.alert(
            `${todo.title} будет удалено `,
            `Вы действительно хотите удалить ${todo.title}?`,
            [
                {
                    text: "Отмена",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Удалить",
                    onPress: () => {
                        setTodoId(null)
                        setTodos(todos.filter((todo) => todo.id !== todoId)
                        )
                    }
                }
            ]
        );
    };

    const changeTitle = (id, title) => {
        setTodos(todos.map(td => td.id === id
            ? {...td, title: title}
            : td)
        )
    }
    const changeSetTodoId = () => setTodoId(null)


    let content = <MainScreen todos={todos}
                              addTodoItem={addTodoItem}
                              removeTodo={removeTodo}
                              onScreen={setTodoId}
    />

    if (todoId) {

        let currentTodo = todos.find(todo => todo.id === todoId)

        content = <TodoScreen goBack={changeSetTodoId}
                              removeTodo={removeTodo}
                              todo={currentTodo}
                              changeTitle={changeTitle}
        />
    }

    return (
        <View>
            <StatusBar style="light"/>
            <Navbar title="Todo App"/>
            <View style={styles.container}>
                {content}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

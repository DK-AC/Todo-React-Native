import React, {useContext, useReducer} from "react";
import {
    addTodoAC,
    fetchTodosAC,
    hideErrorAC,
    hideLoaderAC,
    removeTodoAC,
    showErrorAC,
    showLoaderAC,
    todoReducer,
    updateTodoTitleAC
} from "./todoReducer";
import {TodoContext} from "./todoContext";
import {ScreenContext} from "../screen/screenContext";
import {Alert} from "react-native";

const initialState = {
    todos: [],
    loading: false,
    error: false
}

export const TodoState = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer, initialState)
    const {changeScreen} = useContext(ScreenContext)

    const addTodo = async (title) => {
        const response = await fetch(`https://react-native-todolist-ad112-default-rtdb.europe-west1.firebasedatabase.app/todos.json`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({title}),
            }
        )
        const data = await response.json()
        dispatch(addTodoAC(data.name, title))
    }
    const removeTodo = (todoId) => {

        const todo = state.todos.find(td => td.id === todoId)

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
                        changeScreen(null)
                        dispatch(removeTodoAC(todoId))
                    }
                }
            ]
        );

    }
    const updateTodoTitle = (todoId, title) => dispatch(updateTodoTitleAC(todoId, title))
    const showError = (error) => dispatch(showErrorAC(error))
    const hideError = () => dispatch(hideErrorAC())
    const showLoader = () => dispatch(showLoaderAC())
    const hideLoader = () => dispatch(hideLoaderAC())
    const fetchTodos = async () => {
        showLoader()
        const response = await fetch('https://react-native-todolist-ad112-default-rtdb.europe-west1.firebasedatabase.app/todos.json', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            },
        )
        const data = await response.json()
        const todos = Object.keys(data).map(key => ({...data[key], id: key}))
        dispatch(fetchTodosAC(todos))
        hideLoader()
    }


    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            error: state.error,
            loading: state.loading,
            addTodo,
            removeTodo,
            updateTodoTitle,
            fetchTodos
        }}>
            {children}
        </TodoContext.Provider>)
}
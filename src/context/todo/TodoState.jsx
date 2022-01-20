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
import {url} from "../../types";


export const TodoState = ({children}) => {

    const initialState = {
        todos: [],
        loading: false,
        error: null
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)
    const {changeScreen} = useContext(ScreenContext)


    const addTodo = async (title) => {
        const response = await fetch(`${url}.json`, {
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
                    error: "Отмена",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    error: "Удалить",
                    onPress: async () => {
                        changeScreen(null)
                        await fetch(`${url}/${todoId}.json`, {
                            method: 'DELETE',
                            headers: {'Content-Type': 'application/json'},
                        })
                        dispatch(removeTodoAC(todoId))
                    }
                }
            ],
            {cancelable: false}
        );
    }

    const fetchTodos = async () => {
        showLoader()
        hideError()
        try {
            const response = await fetch(`${url}.json`, {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                },
            )
            const data = await response.json()
            const todos = Object.keys(data).map(key => ({...data[key], id: key}))
            dispatch(fetchTodosAC(todos))
        } catch (e) {
            showError('Что-то пошло не так...')
        } finally {
            hideLoader()
        }
    }

    const updateTodoTitle = async (todoId, title) => {
        hideError()
        try {
            await fetch(`${url}/${todoId}.json`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({title}),
            })
            dispatch(updateTodoTitleAC(todoId, title))
        } catch (e) {
            showError('Что-то пошло не так...')
        }
    }
    const showError = (error) => dispatch(showErrorAC(error))
    const hideError = () => dispatch(hideErrorAC())
    const showLoader = () => dispatch(showLoaderAC())
    const hideLoader = () => dispatch(hideLoaderAC())


    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                error: state.error,
                loading: state.loading,
                addTodo,
                removeTodo,
                updateTodoTitle,
                fetchTodos
            }}
        >
            {children}
        </TodoContext.Provider>)
}
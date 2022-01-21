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
import {Http} from "../../http";


export const TodoState = ({children}) => {

    const initialState = {
        todos: [],
        loading: false,
        error: null
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)
    const {changeScreen} = useContext(ScreenContext)


    const addTodo = async (title) => {
        hideError()
        try {
            const data = await Http.post(`${url}.json`,{title})
            dispatch(addTodoAC(data.name, title))
        } catch (e) {
            showError('Что-то пошло не так')
        }
        console.log({title})
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
                        await Http.delete(`${url}/${todoId}.json`)
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
            const data = await Http.get(`${url}.json`)
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
            await Http.patch(`${url}/${todoId}.json`, {title})
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
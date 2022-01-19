import React, {useContext, useReducer} from "react";
import {addTodoAC, removeTodoAC, todoReducer, updateTodoTitleAC} from "./todoReducer";
import {TodoContext} from "./todoContext";
import {v1} from "react-native-uuid/dist/v1";
import {ScreenContext} from "../screen/screenContext";
import {Alert} from "react-native";

const initialState = {
    todos: [
        {id: v1(), title: 'React'},
        {id: v1(), title: 'Redux'},
        {id: v1(), title: 'JS'},
        {id: v1(), title: 'Rest Api'},
    ]
}

export const TodoState = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer, initialState)
    const {changeScreen} = useContext(ScreenContext)


    const addTodo = (title) => {
        dispatch(addTodoAC(title))
    };
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
    const updateTodoTitle = (todoId, title) => {
        dispatch(updateTodoTitleAC(todoId, title))
    }

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            addTodo,
            removeTodo,
            updateTodoTitle
        }}>
            {children}
        </TodoContext.Provider>)
}
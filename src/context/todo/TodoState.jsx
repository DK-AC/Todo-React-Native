import React, {useReducer} from "react";
import {addTodoAC, todoReducer, updateTodoTitleAC} from "./todoReducer";
import {TodoContext} from "./todoContext";
import {v1} from "react-native-uuid/dist/v1";
import {REMOVE_TODO} from "../../types";

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

    const addTodo = (title) => {
        dispatch(addTodoAC(title))
    };
    const removeTodo = (todoId) => {
        dispatch({type: REMOVE_TODO, todoId})
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
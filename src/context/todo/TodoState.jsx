import React, {useReducer} from "react";
import {todoReducer} from "./todoReducer";
import {TodoContext} from "./todoContext";
import {v1} from "react-native-uuid/dist/v1";

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

    return (
        <TodoContext.Provider value={{todos: state.todos}}>
            {children}
        </TodoContext.Provider>)
}
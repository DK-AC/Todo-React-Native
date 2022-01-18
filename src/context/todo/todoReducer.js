import {ADD_TODO, REMOVE_TODO, UPDATE_TODO_TITLE} from "../../types";
import {v1} from "react-native-uuid/dist/v1";

export const todoReducer = (state, action) => {
    switch (action.type) {
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(td => td.id !== action.todoId)
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    {id: v1(), title: action.title}, ...state.todos]
            }
        case UPDATE_TODO_TITLE:
            return {
                ...state,
                todos: state.todos.map(td => td.id === action.todoId
                    ? {...td, title: action.title}
                    : td)
            }
        default:
            return state
    }
}


export const removeTodoAC = (todoId) => {
    return {
        type: REMOVE_TODO,
        todoId
    }
}

export const addTodoAC = (title) => {
    return {
        type: ADD_TODO,
        title
    }
}

export const updateTodoTitleAC = (todoId, title) => {
    return {
        type: UPDATE_TODO_TITLE,
        todoId,
        title
    }
}

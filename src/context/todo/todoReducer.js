import {ADD_TODO, HIDE_ERROR, HIDE_LOADER, REMOVE_TODO, SHOW_ERROR, SHOW_LOADER, UPDATE_TODO_TITLE} from "../../types";

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
                    {id: action.id, title: action.title}, ...state.todos]
            }
        case UPDATE_TODO_TITLE:
            return {
                ...state,
                todos: state.todos.map(td => td.id === action.todoId
                    ? {...td, title: action.title}
                    : td)
            }
        case SHOW_ERROR:
            return {...state, error: action.error}
        case HIDE_ERROR:
            return {...state, error: false}
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        default:
            return state
    }
}


export const removeTodoAC = (todoId) => {
    return {type: REMOVE_TODO, todoId}
}

export const addTodoAC = (id, title) => {
    return {type: ADD_TODO, id, title}
}

export const updateTodoTitleAC = (todoId, title) => {
    return {type: UPDATE_TODO_TITLE, todoId, title}
}

export const showErrorAC = (error) => {
    return {type: SHOW_ERROR, error}
}

export const hideErrorAC = () => {
    return {type: HIDE_ERROR}
}

export const showLoaderAC = () => {
    return {type: SHOW_LOADER}
}

export const hideLoaderAC = () => {
    return {type: HIDE_LOADER}
}


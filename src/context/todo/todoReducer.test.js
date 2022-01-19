import React from 'react';
import {
    addTodoAC,
    hideErrorAC,
    hideLoaderAC,
    removeTodoAC,
    showErrorAC,
    showLoaderAC,
    todoReducer,
    updateTodoTitleAC
} from "./todoReducer";

let state

beforeEach(() => {
    state = {
        todos: [
            {id: '1', title: 'React'},
            {id: '2', title: 'Redux'},
            {id: '3', title: 'JS'},
            {id: '4', title: 'Rest Api'},
        ],
        loading: false,
        error: false
    }
})
describe('todoReducer tests', () => {

    test('correct todo should be removed', () => {
        let endState = todoReducer(state, removeTodoAC('3'))

        expect(state.todos[2].id).toBe('3')
        expect(state.todos.length).toBe(4)
        expect(endState.todos.length).toBe(3)
    })


    test('correct todo should be add with title', () => {
        let endState = todoReducer(state, addTodoAC('New Id', 'New Title'))

        expect(state.todos.length).toBe(4)
        expect(endState.todos.length).toBe(5)
        expect(state.todos).toEqual([
            {id: '1', title: 'React'},
            {id: '2', title: 'Redux'},
            {id: '3', title: 'JS'},
            {id: '4', title: 'Rest Api'},
        ])
        expect(endState.todos[0].title).toBe('New Title')
        expect(endState.todos[0].id).toBe('New Id')
    })


    test('correct title should be changed', () => {
        let endState = todoReducer(state, updateTodoTitleAC('1', 'Update title'))

        expect(state.todos[0].id).toBe('1')
        expect(state.todos[0].title).toBe('React')
        expect(endState.todos[0].title).toBe('Update title')
        expect(state.todos.length).toBe(4)
        expect(endState.todos.length).toBe(4)
        expect(endState.todos).toEqual([
            {id: '1', title: 'Update title'},
            {id: '2', title: 'Redux'},
            {id: '3', title: 'JS'},
            {id: '4', title: 'Rest Api'},
        ])
    })

    test('show error with text', () => {
        let endState = todoReducer(state, showErrorAC('todos were not received'))

        expect(state.error).toBeFalsy()
        expect(endState.error).toBe('todos were not received')
        expect(endState.error).toBeTruthy()
    })

    test('hide error', () => {
        let endState = todoReducer(state, hideErrorAC())

        expect(state.error).toBeFalsy()
        expect(endState.error).toBeFalsy()
    })

    test('show loading', () => {
        let endState = todoReducer(state, showLoaderAC())

        expect(state.loading).toBeFalsy()
        expect(endState.loading).toBeTruthy()
    })

    test('hide loading', () => {
        let endState = todoReducer(state, hideLoaderAC())

        expect(state.loading).toBeFalsy()
        expect(endState.loading).toBeFalsy()
    })
})





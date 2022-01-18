import React from 'react';
import {removeTodoAC, todoReducer} from "./todoReducer";

let state

beforeEach(() => {
    state = {
        todos: [
            {id: '1', title: 'React'},
            {id: '2', title: 'Redux'},
            {id: '3', title: 'JS'},
            {id: '4', title: 'Rest Api'},
        ]
    }
})

test('correct todo should be removed', () => {
    let endState = todoReducer(state, removeTodoAC('3'))

    expect(state.todos[2].id).toBe('3')
    expect(state.todos.length).toBe(4)
    expect(endState.todos.length).toBe(3)
})




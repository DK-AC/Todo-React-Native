import React from 'react';
import {changeScreenAC, screenReducer} from "./screenReducer";

let state

beforeEach(() => {
    state = null
})

test('todoId should be changed', () => {
    let endState = screenReducer(state, changeScreenAC('newID'))

    expect(state).toBeNull()
    expect(endState).toBe('newID')
})
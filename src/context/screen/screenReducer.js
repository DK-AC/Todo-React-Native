import {CHANGE_SCREEN} from "../../types";

export const screenReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_SCREEN:
            return action.todoId

        default :
            return state
    }

}


export const changeScreenAC = (todoId) => {
    return {
        type: CHANGE_SCREEN,
        todoId
    }
}

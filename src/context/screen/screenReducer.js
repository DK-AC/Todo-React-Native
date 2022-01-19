import {CHANGE_SCREEN} from "../../types";

export const screenReducer = (state, action) => {
    return state
}


export const changeScreenAC = (id) => {
    return {
        type: CHANGE_SCREEN,
        id
    }
}
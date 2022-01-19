import {changeScreenAC, screenReducer} from "./screenReducer";
import {useReducer} from "react";
import {ScreenContext} from "./screenContext";

export const ScreenState = ({children}) => {

    const [state, dispatch] = useReducer(screenReducer, null)

    const changeScreen = (id) => {
        dispatch(changeScreenAC(id))
    }

    return (
        <ScreenContext.Provider value={{todoId: state, changeScreen}}>
            {children}
        </ScreenContext.Provider>
    )

}
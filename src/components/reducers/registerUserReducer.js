import { types } from "../../types/types";


const initialState = {

    done: false,

}


export const registerUserReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.authStartRegister:
            return {
                ...state,
                done: true,
                ...action.payload
            }
        default:
            return state;
    }

}
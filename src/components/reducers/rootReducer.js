import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { registerUserReducer } from "./registerUserReducer";





export const rootReducer = combineReducers({

    auth: authReducer,
    registerUser: registerUserReducer,

});
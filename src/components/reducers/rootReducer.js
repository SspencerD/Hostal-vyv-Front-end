import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { registerUserReducer } from "./registerUserReducer";
import { userDataReducer } from "./userDataReducer";





export const rootReducer = combineReducers({

    auth: authReducer,
    registerUser: registerUserReducer,
    userData: userDataReducer,

});
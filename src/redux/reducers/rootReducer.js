import { combineReducers } from "redux";
import authReducer from "./authReducer";
import fundMagementReducer from "./fundMagementReducer";
import { createUserReducer } from "./createUserReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    users: createUserReducer,
    fundManagement: fundMagementReducer,
})

export default rootReducer


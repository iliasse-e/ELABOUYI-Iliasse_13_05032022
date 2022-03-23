import { authReducer } from "./auth";
import { combineReducers } from "redux"
import { userReducer } from "./user";

/**
 * Gathers all reducers in object
 */
export const rootReducers = combineReducers({
    auth: authReducer,
    user: userReducer,
})
import { loggedReducer } from "./isLogged";
import { combineReducers } from "redux"

/**
 * Gathers all reducers in object
 */
export const rootReducers = combineReducers({
    isLogged: loggedReducer
})
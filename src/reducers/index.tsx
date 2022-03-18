import { authReducer } from "./auth";
import { combineReducers } from "redux"
import { tokenReducer } from "./token";
import { userReducer } from "./user";
import { editProfileReducer } from "./edit-profile";

/**
 * Gathers all reducers in object
 */
export const rootReducers = combineReducers({
    auth: authReducer,
    user: userReducer,
    editProfile: editProfileReducer
})
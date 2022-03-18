import { userStateType } from "../reducers/user"
import { CANCEL_EDIT_PROFILE, EDIT_PROFILE, IS_LOGGED, LOGIN_SUCCESS, LOGOUT, SET_PROFILE, TOKEN_AVAILABLE, TOKEN_VALID } from "./types"

export const connectAction = (message: String, token: String) => {
    return {
        type: LOGIN_SUCCESS,
        message: message,
        token: token
    }
}

export const disconnectAction = () => {
    return {
        type: LOGOUT,
        message: "You have been disconnected",
        token: null
    }
}

export const getUserAction = (user: userStateType) => {
    return {
        type: IS_LOGGED,
        user: user
    }
}

export const updateProfileAction = (updatedUser : {firstName: String, lastName: String, email : String, password: String}) => {
    return {
        type: SET_PROFILE,
        updatedUser: updatedUser
    }
}

export const editProfileAction = () => {
    return {
        type: EDIT_PROFILE,
    }
}

export const cancelEditProfileAction = () => {
    return {
        type: CANCEL_EDIT_PROFILE,
    }
}
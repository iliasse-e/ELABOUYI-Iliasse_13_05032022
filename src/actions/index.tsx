/**
 * @file Gathers all redux actions
 */

import { userStateType } from "../reducers/user"
import { IS_LOGGED, LOGIN_SUCCESS, LOGOUT, SET_PROFILE } from "./types"

export const connectAction = (message: string, token: string, remember: boolean) => {
    return {
        type: LOGIN_SUCCESS,
        message: message,
        token: token,
        remember: remember
    }
}

export const disconnectAction = () => {
    return {
        type: LOGOUT,
        message: "You have been disconnected",
        token: null,
        remember: false
    }
}

/**
 * Sets a user into redux store
 * @param user 
 * @returns user profile
 */
export const getUserAction = (user: userStateType) => {
    return {
        type: IS_LOGGED,
        user: user
    }
}

/**
 * Updates redux store user profile
 * Has to be used inside dispatch
 * @param updatedUser 
 * @returns updated user profile
 */
export const updateProfileAction = (updatedUser : userStateType) => {
    return {
        type: SET_PROFILE,
        updatedUser: updatedUser
    }
}
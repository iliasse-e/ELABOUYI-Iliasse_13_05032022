import { IS_LOGGED, LOGIN_SUCCESS, LOGOUT, TOKEN_AVAILABLE, TOKEN_VALID } from "./types"

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

export const userAction = (user: any) => {
    return {
        type: IS_LOGGED,
        user: user
    }
}
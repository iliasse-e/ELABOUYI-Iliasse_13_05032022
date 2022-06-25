import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../actions/types";

interface authStateType {
    isLogged: boolean,
    token: string | null,
    message : string,
    remember: boolean
}

interface actionType {
    type: string,
    token: string | null,
    message : string,
    remember: boolean
}

const defaultState = {
    isLogged: false,
    token: null,
    message: "Not connected",
    remember: false
}

/**
 * Manages the authentification reducer state (user is logged ?, token, and connexion message)
 * @param state 
 * @param action 
 * @returns {authStateType}
 */
export const authReducer = (state: authStateType = defaultState, action: actionType): authStateType => {
    switch(action.type){

        case LOGIN_SUCCESS:
            return {
                isLogged: true,
                token: action.token,
                message: action.message,
                remember: action.remember
            };
             
        case LOGIN_FAIL :
            return {
                isLogged: false,
                token: null,
                message: "Connexion failed",
                remember: false
            };
        
        case LOGOUT:
            return {
                isLogged: false,
                token: null,
                message: action.message,
                remember: false
            };

        default :
        return state
    }
}
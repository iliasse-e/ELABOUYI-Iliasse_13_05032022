import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../actions/types";

export const loggedReducer = (state = false, action: any) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return true;
        case LOGIN_FAIL :
            return false;
        case LOGOUT :
            return false;
        default :
        return state
    }
}

interface authStateType {
    isLogged: Boolean,
    token: String | null,
    message : String
}

const defaultState = {
    isLogged: false,
    token: null,
    message: "Not connected"
 }

/**
 * Manages the authentification reducer state (user is logged ?, token, and connexion message)
 * @param state 
 * @param action 
 * @returns {authStateType}
 */
export const authReducer = (state: authStateType = defaultState, action: any): authStateType => {
    switch(action.type){

        case LOGIN_SUCCESS:
            return {
                isLogged: true,
                token: action.token,
                message: action.message
             };
             
        case LOGIN_FAIL :
            return {
                isLogged: false,
                token: null,
                message: "Connexion failed"
             };
        
        case LOGOUT:
            return {
                isLogged: false,
                token: action.token,
                message: action.message
            };

        default :
        return state
    }
}
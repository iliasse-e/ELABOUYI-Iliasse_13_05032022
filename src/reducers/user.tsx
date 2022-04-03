import { IS_LOGGED, LOGOUT, SET_PROFILE } from "../actions/types";

export interface userStateType {
    firstName: null | string,
    lastName: null | string,
    email: null | string,
    id: null | string
}

interface actionType {
    type: string,
    message?: string,
    user?: userStateType,
    updatedUser?: {
        firstName: string,
        lastName: string,
        email : string,
        id: string
    },
    token: string | null
}

const defaultState = {
    firstName: null,
    lastName: null,
    email: null,
    id: null
}

/**
 * Manages the User redux state (gets user or updates it) 
 * @param state 
 * @param action Logged, set profile, logout
 * @returns user profile informations
 */
export const userReducer = (state: userStateType = defaultState, action: actionType) => {

    switch(action.type){
        case IS_LOGGED:
            return {
                firstName: action.user.firstName,
                lastName: action.user.lastName,
                email: action.user.email,
                id: action.user.id
        };
        case SET_PROFILE:
            return {
                firstName: action.updatedUser.firstName,
                lastName: action.updatedUser.lastName,
                email: action.updatedUser.email,
                id: action.updatedUser.id
        };
        case LOGOUT :
            return defaultState
        default :
            return state
            
    }
}
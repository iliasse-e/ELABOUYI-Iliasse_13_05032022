import { IS_LOGGED, SET_PROFILE } from "../actions/types";

export interface userStateType {
    firstName: null | String,
    lastName: null | String,
    email: null | String,
    id: null | String
}

const defaultState = {
    firstName: null,
    lastName: null,
    email: null,
    id: null
}

export const updateProfileReducer = (state: userStateType = defaultState, action: any) => {
    switch(action.type){
        case SET_PROFILE:
            return {
                firstName: action.user.firstName,
                lastName: action.user.lastName,
                email: action.user.email,
                id: action.user.id
        };
        default :
            return state
    }
}
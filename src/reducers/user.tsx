import { useState } from "react";
import { RootStateOrAny } from "react-redux";
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

export const userReducer = (state: userStateType = defaultState, action: any) => {

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
        default :
            return state
            
    }
}
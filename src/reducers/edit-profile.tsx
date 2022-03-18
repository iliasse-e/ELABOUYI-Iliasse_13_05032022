import { IS_LOGGED, EDIT_PROFILE, CANCEL_EDIT_PROFILE } from "../actions/types";

export const editProfileReducer = (state: Boolean = false, action: any) => {
    switch(action.type){
        case EDIT_PROFILE:
            return true;
        case CANCEL_EDIT_PROFILE:
            return false
        default :
            return state
    }
}
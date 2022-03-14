import { TOKEN_AVAILABLE } from "../actions/types";

export const tokenReducer = (state = null, action: any) => {
    switch(action.type){
        case TOKEN_AVAILABLE:
            return action.message;
        default :
            return state
    }
}
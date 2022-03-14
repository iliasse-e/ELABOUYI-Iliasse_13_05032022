import { IS_LOGGED } from "../actions/types";

export const userReducer = (state = null, action: any) => {
    switch(action.type){
        case IS_LOGGED:
            return {
                firstName: "name",
                lastName: "Surname",
                email: "email@email"
        };
        default :
            return state
            
    }
}
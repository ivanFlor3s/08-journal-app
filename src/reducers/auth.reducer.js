import { types } from "../types/types";

//Modelo de mi state en el reducer
/**
 *  {
 *      uid:'key-123231321',
 *      name: 'Ivan'
 *   }
 */


export const authReducer = (state = {}, action)=>{
    switch(action.type){
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.logout:
            return { }
        default:
            return state
    }
}
import { UserActionTypes } from './user.types' 

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case UserActionTypes.LOGIN:
            return {
                ...state,
                currentUser: action.payload.currentUser,
            }
        case UserActionTypes.LOGIN_REQUEST:
            console.log("ap : " , action.payload)
            return {
                ...state,
                currentUser: action.payload
            }    
        default:
            return state
    }
}

export default userReducer
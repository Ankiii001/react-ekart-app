import { UserActionTypes } from './user.types' 

export const setCurrentUser = user => ({
    type: UserActionTypes.LOGIN,
    payload: user
})
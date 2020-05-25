import { UserActionTypes } from './user.types' 


export const setCurrentUser = user => ({
    type: UserActionTypes.LOGIN,
    payload: user
})


export const login = (args) => {
    const {userName, password} =args
    return function(dispatch){
            const url = `//localhost:3001/users?user-name=${userName}&password=${password}`
    fetch(url)
    .then(response => response.json())
    .then(user => {
        localStorage.setItem('user', user[0].user_name)
        dispatch({
            type:UserActionTypes.LOGIN_REQUEST,
            payload:user[0].user_name
        })
    })   
    .catch (error => console.log(error))
    }
}
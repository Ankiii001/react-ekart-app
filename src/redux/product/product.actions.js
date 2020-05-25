import { ProductActionTypes } from './product.types'


export const setProduct = product => ({
    type: ProductActionTypes.PRODUCT,
    payload: product
})

export const getProduct = () => {
    return function(dispatch){
            const url = '//localhost:3001/products'
    fetch(url)
    .then(response => response.json())
    .then(product => {
        console.log(product)
        dispatch({
            type:ProductActionTypes.PRODUCT,
            payload: product
        })
    })   
    .catch (error => console.log(error))
    }
}
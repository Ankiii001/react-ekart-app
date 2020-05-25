import { ProductActionTypes } from './product.types'

const INITIAL_STATE = {
    currentProduct: [],
    isLoading: false
}

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case ProductActionTypes.PRODUCT:
            return {
                ...state,
                currentProduct: action.payload,
                isLoading: false
            }
        case ProductActionTypes.PRODUCT_REQUEST:
            // console.log("ap : ", action.payload)
            return {
                ...state,
                currentProduct: action.payload,
                isLoading: true
            }
        default:
            return state
    }
}

export default productReducer
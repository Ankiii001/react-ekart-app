import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import productReducer from './product/product.reducer'

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    product: productReducer
})
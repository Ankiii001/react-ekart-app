import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = [logger]
export const store = createStore(rootReducer, applyMiddleware(thunk, ...middlewares))

export const persistor = persistStore(store)
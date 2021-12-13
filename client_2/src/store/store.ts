import { applyMiddleware, combineReducers, createStore } from 'redux'
import goodsReducer from './goodsReducer'
import { reducer as formReducer } from 'redux-form'
import orderReducer from './orderReducer'
import UserReducer from './userReducer'
import AdminReducer from './adminReducer'
import ThunkMiddleware from 'redux-thunk'

let RootReducer = combineReducers({
    goods: goodsReducer,
    orders: orderReducer,
    user: UserReducer,
    admin: AdminReducer,
    form: formReducer

});

type RootReducerType = typeof RootReducer
export type AppStateType = ReturnType<RootReducerType>


let store = createStore(RootReducer, applyMiddleware(ThunkMiddleware))

//@ts-ignore
window.store = store

export default store

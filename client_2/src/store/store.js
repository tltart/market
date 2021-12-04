import { applyMiddleware, combineReducers, createStore } from 'redux';
import goodsReducer from './goodsReducer';
import { reducer as formReducer } from 'redux-form';
import orderReducer from './orderReducer';
import UserReducer from './userReducer';
import AdminReducer from './adminReducer';
import ThunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    goods: goodsReducer,
    orders: orderReducer,
    user: UserReducer,
    admin: AdminReducer,
    form: formReducer

});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;

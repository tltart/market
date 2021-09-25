import { combineReducers, createStore } from 'redux';
import goodsReducer from './goodsReducer'
import { reducer as formReducer } from 'redux-form'
import orderReducer from './orderReducer'


let reducers = combineReducers({
    goods: goodsReducer,
    orders: orderReducer,
    form: formReducer

});

let store = createStore(reducers);

window.store = store;

export default store;

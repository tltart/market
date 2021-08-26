import {combineReducers, createStore} from 'redux';
import goodsReducer from './goodsReducer'



let reducers = combineReducers({
    goods: goodsReducer,

});


let store = createStore(reducers);



export default store;

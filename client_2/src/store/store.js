import {combineReducers, createStore} from 'redux';
import goodsReducer from './goodsReducer'
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    goods: goodsReducer,
    form: formReducer

});


let store = createStore(reducers);



export default store;

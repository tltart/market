import {combineReducers, createStore} from 'redux';
import swipeMenuReducer from './swipeMenuReducer'



let reducers = combineReducers({
    swipemenu: swipeMenuReducer,

});


let store = createStore(reducers);



export default store;

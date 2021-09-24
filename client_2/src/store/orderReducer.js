import {RemoveGoodBasket} from './goodsReducer'

const ORDER = "Order"


let initialState = {

    orders: []

}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER:
            action.payload.array.forEach(item => {
                RemoveGoodBasket(item)
            });
            localStorage.removeItem('offer');
            if (localStorage.getItem('order')){
                let ol = JSON.parse(localStorage.getItem('order'));
                ol.push([...action.payload])
                localStorage.setItem('order', JSON.stringify(ol))
                return { ...state, orders: [...state.orders, ...action.payload] }
            } 
            localStorage.setItem('order', JSON.stringify(action.payload));
            return { ...state, orders: [...state.orders, ...action.payload] }
        default:
            return state;
    }

}

export const Ordering = (order) => ({ type: ORDER, payload: order })


export default orderReducer;
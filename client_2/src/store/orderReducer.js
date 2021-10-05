import moment from "moment";
import { AddGoodToBasket } from '../http/goodApi'

const ORDER = "Order"
const GET_ORDER = "GET_ORDER"
const GET_TIME = "GET_TIME"


let initialState = {

    orders: []

}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER:
            localStorage.removeItem('offer');
            if (localStorage.getItem('order')) {
                let ol = JSON.parse(localStorage.getItem('order'));
                ol = [...ol, ...action.payload];
                localStorage.setItem('order', JSON.stringify(ol))
                return { ...state, orders: [...state.orders, ...action.payload] }
            }
            localStorage.setItem('order', JSON.stringify(action.payload));
            return { ...state, orders: [...state.orders, ...action.payload] }
        case GET_ORDER:
            if (localStorage.getItem('order')) {
                let ol = JSON.parse(localStorage.getItem('order'));
                return { ...state, orders: [...ol] }
            }
            return state
        case GET_TIME:
            if (state.orders.length) {
                let stateCopy = { ...state };
                stateCopy.orders = [...state.orders];
                stateCopy.orders.map(item => item.dayToEnd = moment(item.date).diff(moment(), 'days'))

                return stateCopy
            }
            return state
        default:
            return state;
    }

}

export const Ordering = (order) => ({ type: ORDER, payload: order })
export const GetOrder = () => ({ type: GET_ORDER })
export const GetTimeToEnd = () => ({ type: GET_TIME })

export const DataPromise = (d) => {
    return d
}

export const OrderSendThunk = (order) => {
    return (dispatch) => {

        new Promise((resolve, reject) => {
            let bb = AddGoodToBasket(order)
            if (!bb || bb.staus != 200){
                reject("Ошибка")
            }
            resolve(bb)
        })
        .then((bb) => {
            console.log(bb.status);
            dispatch(Ordering(order));
        }).catch(err => console.log(err))

    }
}


export default orderReducer;
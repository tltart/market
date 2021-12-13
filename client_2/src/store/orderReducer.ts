import { AxiosResponse } from "axios";
import moment from "moment";
import { ThunkAction } from "redux-thunk"
import { AppStateType } from "./store"
import { AddGoodToBasket } from '../http/goodApi';
import { RemoveOfferFromState, RemoveOfferFromStateType } from "./goodsReducer";
import { OfferType, OrderType } from "./types/types"



const ORDER = "ORDER"
const GET_ORDER = "GET_ORDER"
const GET_TIME = "GET_TIME"


let initialState = {

    orders: [] as Array<OrderType>

}

type InitialStateType = typeof initialState

type ActionTypes = OrderingType | GetOrderType | GetTimeToEndType | RemoveOfferFromStateType

const orderReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {

        case ORDER:
            if (localStorage.getItem('order')) {
                //@ts-ignore
                let ol = JSON.parse(localStorage.getItem('order'));
                ol = [...ol, ...action.payload];
                localStorage.setItem('order', JSON.stringify(ol))
                return { ...state, orders: [...state.orders, ...action.payload] }
            }
            localStorage.setItem('order', JSON.stringify(action.payload));
            return { ...state, orders: [...state.orders, ...action.payload] }

        case GET_ORDER:
            if (localStorage.getItem('order')) {
                //@ts-ignore
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

type OrderingType = { type: typeof ORDER, payload: Array<OrderType> }
export const Ordering = (order: Array<OrderType>): OrderingType => ({ type: ORDER, payload: order })

type GetOrderType = { type: typeof GET_ORDER }
export const GetOrder = (): GetOrderType => ({ type: GET_ORDER })

type GetTimeToEndType = { type: typeof GET_TIME }
export const GetTimeToEnd = (): GetTimeToEndType => ({ type: GET_TIME })


type ResponceOrderType = Array<OrderType>


export const OrderSendThunk = (order: Array<OrderType>): ThunkAction<void, AppStateType, unknown, ActionTypes> => {
    return (dispatch) => {

        return new Promise((resolve, reject) => {
            AddGoodToBasket(order).
                then((response: AxiosResponse<string>) => {
                    dispatch(RemoveOfferFromState());
                    localStorage.removeItem('offer');
                    dispatch(Ordering(order));
                    resolve(response);
                })
                .catch(e => {
                    if (e.response && e.response.data) {
                        return alert(e.response.data.message);
                    }
                    reject("Нет соединения...")
                });
        })
    }
}


export default orderReducer;
import { AxiosResponse } from "axios"
import { ThunkAction } from "redux-thunk"
import { GetGoodToStore } from "../http/goodApi"
import { AppStateType } from "./store"
import { OfferType, GoodType } from "./types/types"

const ACTIVE = "ACTIVE"
const ADD_GOOD_BASKET = "ADD_GOOD_BASKET"
const REMOVE_OFFER_FROM_STATE = "REMOVE_OFFER_FROM_STATE"
const REMOVE_GOOD_BASKET = "REMOVE_GOOD_BASKET"
const GOOD_COUNT = "GOOD_COUNT"
const INIT_GOOD = "INIT_GOOD"



let initialState = {
    goods: [] as Array<GoodType>,
    names: ['Все', 'zephir', 'karamel', 'maffin', 'marshmelloy', 'tort'],
    activeGood: null as number | null,
    offers: [] as Array<OfferType>,
    totalPrice: 0
}

type InitialStateType = typeof initialState

type ActionTypes = GoodActiveType | AddGoodBasketType | RemoveGoodBasketType | RemoveOfferFromStateType | GoodCountType | GoodInitType

const goodsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {

        case INIT_GOOD:
            return { ...state, goods: [...state.goods, ...action.payload] }

        case ACTIVE:
            return { ...state, activeGood: action.payload }

        case ADD_GOOD_BASKET:
            //@ts-ignore
            if (localStorage.getItem('offer')) {
                //@ts-ignore
                let ol = JSON.parse(localStorage.getItem('offer'));
                ol.push(action.payload);
                localStorage.setItem('offer', JSON.stringify(ol))
                return { ...state, offers: [...state.offers, action.payload] }
            }
            localStorage.setItem('offer', JSON.stringify([action.payload]))
            return { ...state, offers: [...state.offers, action.payload] }

        case REMOVE_OFFER_FROM_STATE:
            return { ...state, offers: [] }

        case REMOVE_GOOD_BASKET:
            //@ts-ignore
            if (JSON.parse(localStorage.getItem('offer')).length > 1) {
                //@ts-ignore
                let zz = JSON.parse(localStorage.getItem('offer')).filter(item => item.id != action.payload);
                localStorage.setItem('offer', JSON.stringify(zz));
                return { ...state, offers: [...state.offers.filter(offer => offer.id !== action.payload)] }
            }
            localStorage.removeItem('offer');
            return { ...state, offers: [] }




        case GOOD_COUNT:
            let { id, count } = action.payload;
            let stateCopy = { ...state };
            stateCopy.offers = [...state.offers];
            stateCopy.totalPrice = 0;
            stateCopy.offers.map(offer => {
                if (offer.id == id) {
                    offer.count = count;
                    offer.totalPriceProduct = count * offer.price;
                    stateCopy.totalPrice += offer.totalPriceProduct;
                    return
                }
                stateCopy.totalPrice += offer.totalPriceProduct;
                return offer
            })
            localStorage.setItem('offer', JSON.stringify(stateCopy.offers))
            return stateCopy;
        default:
            return state;
    }

}

type GoodActiveType = { type: typeof ACTIVE, payload: number }
export const GoodActive = (item: number): GoodActiveType => ({ type: ACTIVE, payload: item })

type AddGoodBasketType = { type: typeof ADD_GOOD_BASKET, payload: OfferType }
export const AddGoodBasket = (good: OfferType): AddGoodBasketType => ({ type: ADD_GOOD_BASKET, payload: good })

type RemoveGoodBasketType = { type: typeof REMOVE_GOOD_BASKET, payload: number }
export const RemoveGoodBasket = (id: number): RemoveGoodBasketType => ({ type: REMOVE_GOOD_BASKET, payload: id })

export type RemoveOfferFromStateType = { type: typeof REMOVE_OFFER_FROM_STATE }
export const RemoveOfferFromState = (): RemoveOfferFromStateType => ({ type: REMOVE_OFFER_FROM_STATE })

type OfferCounterType = { count: number, id: number }
type GoodCountType = { type: typeof GOOD_COUNT, payload: OfferCounterType }
export const GoodCount = (offer: OfferCounterType): GoodCountType => ({ type: GOOD_COUNT, payload: offer })

type GoodInitType = { type: typeof INIT_GOOD, payload: Array<GoodType> }
const GoodInit = (good: Array<GoodType>): GoodInitType => ({ type: INIT_GOOD, payload: good })

// "count": 3,
// "rows": [
//     {
//         "id": 1,
//         "name": "Флюдеболли",
//         "price": 22222,
//         "img": "f88de407-33aa-481e-ad65-83197c5a5815.jpg",
//         "info": "eeeee",
//         "createdAt": "2021-12-04T09:22:07.715Z",
//         "updatedAt": "2021-12-04T09:22:07.715Z"
//     },

type ResponseProductType = {
    count: number
    rows: Array<GoodType>
}

export const GetGoodThunk = (): ThunkAction<void, AppStateType, unknown, ActionTypes> => {
    return (dispatch) => {

        GetGoodToStore().then((response: AxiosResponse<ResponseProductType>) => {
            dispatch(GoodInit(response.data.rows));
        });

    }
}

export default goodsReducer;
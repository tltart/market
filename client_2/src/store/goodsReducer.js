import { GetGoodToStore } from "../http/goodApi"

const ACTIVE = "ACTIVE"
const ADD_GOOD_BASKET = "ADD_GOOD_BASKET"
const ADD_OFFER_FROM_STORAGE = "ADD_OFFER_FROM_STORAGE"
const REMOVE_OFFER_FROM_STATE = "REMOVE_OFFER_FROM_STATE"
const REMOVE_GOOD_BASKET = "REMOVE_GOOD_BASKET"
const GOOD_COUNT = "GOOD_COUNT"
const INIT_GOOD = "INIT_GOOD"


let initialState = {

    goods: [],
    names: ['Все', 'zephir', 'karamel', 'maffin', 'marshmelloy', 'tort'],
    activeGood: null,
    offers: [],
    totalPrice: 0

}

const goodsReducer = (state = initialState, action) => {
    switch (action.type) {

        case INIT_GOOD:
            return {... state, goods: [...state.goods, ...action.payload]}

        case ACTIVE:
            return { ...state, activeGood: action.payload }

        case ADD_GOOD_BASKET:
            if (localStorage.getItem('offer')) {
                let ol = JSON.parse(localStorage.getItem('offer'));
                ol.push(action.payload);
                localStorage.setItem('offer', JSON.stringify(ol))
                return { ...state, offers: [...state.offers, action.payload] }
            }
            localStorage.setItem('offer', JSON.stringify([action.payload]))
            return { ...state, offers: [...state.offers, action.payload] }

        case ADD_OFFER_FROM_STORAGE:
            return { ...state, offers: [...state.offers, action.payload] }

        case REMOVE_OFFER_FROM_STATE:
            console.log("Remove from State");
            return { ...state, offers: [] }

        case REMOVE_GOOD_BASKET:
            console.log(JSON.parse(localStorage.getItem('offer')).length);
            if (JSON.parse(localStorage.getItem('offer')).length > 1) {
                
                let zz = JSON.parse(localStorage.getItem('offer')).filter(item => item.id != action.payload);
                localStorage.setItem('offer', JSON.stringify(zz));
                return { ...state, offers: [...state.offers.filter(offer => offer.id !== action.payload)] }
            }
            localStorage.removeItem('offer');
            return RemoveOfferFromState();
            


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

export const GoodActive = (item) => ({ type: ACTIVE, payload: item })
export const AddGoodBasket = (good) => ({ type: ADD_GOOD_BASKET, payload: good })
export const RemoveGoodBasket = (id) => ({ type: REMOVE_GOOD_BASKET, payload: id })
export const AddOfferFromStorage = (good) => ({ type: ADD_OFFER_FROM_STORAGE, payload: good })
export const RemoveOfferFromState = () => ({ type: REMOVE_OFFER_FROM_STATE })
export const GoodCount = (offer) => ({ type: GOOD_COUNT, payload: offer })

const GoodInit = (good) => ({ type: INIT_GOOD, payload: good})

export const GetGoodThunk = () => {
    return (dispatch) => {

        GetGoodToStore().then((response) => {
            // console.log(response.data.rows);
            dispatch(GoodInit(response.data.rows));
        });

    }
}

export default goodsReducer;
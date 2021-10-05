const ACTIVE = "ACTIVE"
const ADD_GOOD_BASKET = "ADD_GOOD_BASKET"
const ADD_OFFER_FROM_STORAGE = "ADD_OFFER_FROM_STORAGE"
const REMOVE_OFFER_FROM_STATE = "REMOVE_OFFER_FROM_STATE"
const REMOVE_GOOD_BASKET = "REMOVE_GOOD_BASKET"
const GOOD_COUNT = "GOOD_COUNT"

let initialState = {

    goods: [
        { id: 1, name: 'zephir', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 1600, weight: 1100, img: 'images/zephir.jpg', taste: ['malina', 'banana', 'caramel', 'penapple', 'watermelon', 'coffee'] },
        { id: 2, name: 'karamel', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 100, weight: 100, img: 'images/karamel.jpg', taste: ['malina', 'banana', 'caramel', 'penapple', 'watermelon', 'coffee'] },
        { id: 3, name: 'maffin', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 3200, weight: 700, img: 'images/maffin.jpg', taste: ['malina', 'banana', 'caramel', 'penapple', 'watermelon', 'coffee'] },
        { id: 4, name: 'marshmelloy', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 7700, weight: 900, img: 'images/marshmelloy.jpg', taste: ['malina', 'banana', 'caramel', 'penapple', 'watermelon', 'coffee'] },
        { id: 5, name: 'tort', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 150, weight: 88, img: 'images/tort.jpg', taste: ['malina', 'banana', 'caramel', 'penapple', 'watermelon', 'coffee'] },
        { id: 6, name: 'zephir', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 1600, weight: 1100, img: 'images/zephir.jpg', taste: ['malina', 'banana', 'caramel', 'penapple', 'watermelon', 'coffee'] },
        { id: 7, name: 'karamel', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 100, weight: 100, img: 'images/karamel.jpg', taste: ['malina', 'banana', 'caramel', 'penapple', 'watermelon', 'coffee'] },
        { id: 8, name: 'maffin', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 3200, weight: 700, img: 'images/maffin.jpg', taste: ['malina', 'banana', 'caramel', 'penapple', 'watermelon', 'coffee'] },
        { id: 9, name: 'marshmelloy', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 7700, weight: 900, img: 'images/marshmelloy.jpg', taste: ['malina', 'banana', 'caramel', 'penapple', 'watermelon', 'coffee'] },
        { id: 10, name: 'tort', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 150, weight: 88, img: 'images/tort.jpg', taste: ['malina', 'banana', 'caramel', 'penapple', 'watermelon', 'coffee'] }
    ],
    names: ['Все', 'zephir', 'karamel', 'maffin', 'marshmelloy', 'tort'],
    activeGood: null,
    offers: [],
    totalPrice: 0

}

const goodsReducer = (state = initialState, action) => {
    switch (action.type) {

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
            return {...state, offers: []}

        case REMOVE_GOOD_BASKET:
            let zz = JSON.parse(localStorage.getItem('offer')).filter(item => item.id != action.payload);
            localStorage.setItem('offer', JSON.stringify(zz));
            return { ...state, offers: [...state.offers.filter(offer => offer.id !== action.payload)] }

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
export const RemoveOfferFromState = () => ({ type: REMOVE_OFFER_FROM_STATE})
export const GoodCount = (offer) => ({ type: GOOD_COUNT, payload: offer })


export default goodsReducer;
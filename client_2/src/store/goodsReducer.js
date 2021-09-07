const ACTIVE = "ACTIVE"
const ADD_GOOD_BASKET = "ADD_GOOD_BASKET"

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
    pageSize: 5,
    countPage: 1,
    activeGood: null,
    offers: [
        {id: '2shit', name: 'karamel', taste: 'shit', img: 'images/karamel.jpg', date: '21-09-2021'},
        {id: '5shit', name: 'tort', taste: 'shit', img: 'images/tort.jpg', date: '21-09-2021'},
    ]

}

const goodsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ACTIVE:
            return { ...state, activeGood: action.payload }
        case ADD_GOOD_BASKET:
            return { ...state, offers: [...state.offers, action.payload] }
        default:
            return state;
    }
}

export const GoodActive = (item) => ({ type: ACTIVE, payload: item })
export const AddGoodBasket = (good) => ({ type: ADD_GOOD_BASKET, payload: good })

export default goodsReducer;
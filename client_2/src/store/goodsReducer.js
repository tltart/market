const ACTIVE = "ACTIVE"


let initialState = {

    goods: [
        {id: 1, name: 'zephir', descpription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 1600, weigth: 1100, img: 'images/zephir.jpg'},
        {id: 2, name: 'karamel', descpription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 100, weigth: 100, img: 'images/karamel.jpg'},
        {id: 3, name: 'maffin', descpription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 3200, weigth: 700, img: 'images/maffin.jpg'},
        {id: 4, name: 'marshmelloy', descpription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 7700, weigth: 900, img: 'images/marshmelloy.jpg'},
        {id: 5, name: 'tort', descpription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 150, weigth: 88, img: 'images/tort.jpg'},
        {id: 6, name: 'zephir', descpription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 1600, weigth: 1100, img: 'images/zephir.jpg'},
        {id: 7, name: 'karamel', descpription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 100, weigth: 100, img: 'images/karamel.jpg'},
        {id: 8, name: 'maffin', descpription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 3200, weigth: 700, img: 'images/maffin.jpg'},
        {id: 9, name: 'marshmelloy', descpription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 7700, weigth: 900, img: 'images/marshmelloy.jpg'},
        {id: 10, name: 'tort', descpription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 150, weigth: 88, img: 'images/tort.jpg'}
    ],
    pageSize: 5,
    countPage: 1,
    activeGood: false,

}

const goodsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTIVE:
            console.log("State GOOD active");
            let newState = {...state}
            newState.activeGood = action.payload;
            return newState

        default:
            return state;
    }
}

export const GoodActive = (item) => ({type: ACTIVE, payload: item})

export default goodsReducer;
const ORDER = "Order"


let initialState = {

    orders: []

}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER:
            action.payload.map(item => localStorage.removeItem(item.id));
            return { ...state, orders: [...state.orders, ...action.payload] }
        default:
            return state;
    }

}

export const Ordering = (order) => ({ type: ORDER, payload: order })


export default orderReducer;
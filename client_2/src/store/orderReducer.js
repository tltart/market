const ORDER = "Order"
const GET_ORDER = "GET_ORDER"

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
                console.log(ol);
                return { ...state, orders: [...ol] }
            }
        default:
            return state;
    }

}

export const Ordering = (order) => ({ type: ORDER, payload: order })
export const GetOrder = () => ({ type: GET_ORDER})


export default orderReducer;
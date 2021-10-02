
const AUTH = "AUTH"

let initialState = {
    isAuth: false
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case AUTH:
            console.log(action.payload);
            return { ...state, isAuth: action.payload }

        default:
            return state;
    }
}

export const UserAuth = (status) => ({ type: AUTH, payload: status });

export const UserThunk = () => {
    return (dispatch) => {
        dispatch(UserAuth(true))
    }
}


export default UserReducer;
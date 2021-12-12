
const AUTH = "AUTH";
const SET_USER_DATA = "SET_USER_DATA";

let initialState = {    
    isAuth: false,
    isAdmin: false,

    name: '',
    mail: '',
    phone: ''
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case AUTH:
            console.log(action.payload);
            return { ...state, isAuth: action.payload.isAuth, name: action.payload.role, mail: action.payload.email }
        default:
            return state;
    }
}

const UserAuth = (data) => ({ type: AUTH, payload: data });


export const UserThunk = (data = {isAuth:false, name:'', mail:''}) => {
    return (dispatch) => {
        dispatch(UserAuth(data));
    }
}


export default UserReducer;
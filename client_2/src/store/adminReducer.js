import { AddGoodBase } from "../http/goodApi"

const ACTIVE = "ACTIVE"


let initialState = {
    isAdmin: true
}

const adminReducer = (state = initialState, action) => {
    
    return state

}

// export const GoodActive = (good) => ({ type: ACTIVE, payload: good })


export const AddGoodToBaseThunk = (data) => {
    return (dispatch) => {

        AddGoodBase(data).then((response) => {
            console.log(response.data);
        });

    }
}

export default adminReducer;
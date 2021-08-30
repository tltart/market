const ACTIVE = "ACTIVE";
const DEACTIVE = "DEACTIVE";

let initialState = { isActive: false, balalaika: 'agon' };

const swipeMenuReducer = (state = initialState, action) => {
    let stateCopy = { ...state };
    switch (action.type) {

        case ACTIVE:
            console.log("REDUCER ACTIVATE MENU")
            stateCopy.isActive = true
            return stateCopy;
        case DEACTIVE:
            console.log("REDUCER DEACTIVATE MENU")
            stateCopy = { ...state }
            stateCopy.isActive = false
            return stateCopy;
        default:
            return state;
    }

}

export const swipeMenuActive = () => ({ type: ACTIVE })
export const swipeMenuDeactive = () => ({ type: DEACTIVE })

export default swipeMenuReducer;
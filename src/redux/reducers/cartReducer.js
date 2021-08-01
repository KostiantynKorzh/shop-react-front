import * as Actions from '../actions/Actions';

const initialState = {
    cartItems: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.ADD_ITEM_TO_CART:
            return {
                cartItems: action.payload.cartItems
            };
        case Actions.DELETE_ITEM_FROM_CART:
            return {
                ...state
            };
        default:
            return state;
    }
};
import * as Actions from './Actions';

export const addItemToCart = (cartItems) => ({
    type: Actions.ADD_ITEM_TO_CART,
    payload: {cartItems}
});

export const deleteItemToCart = (itemId, quantity) => ({
    type: Actions.DELETE_ITEM_FROM_CART,
    payload: {itemId, quantity}
});
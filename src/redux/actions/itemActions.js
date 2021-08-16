import * as Actions from './Actions'

export const fetchItemsSuccess = items => ({
    type: Actions.FETCH_ITEMS_SUCCESS,
    payload: {items}
});


export const createItemSuccess = items => ({
    type: Actions.CREATE_ITEM_SUCCESS,
    payload: {items}
});
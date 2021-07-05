import * as Actions from './Actions'

// spinner or smth like that
export const fetchItemsBegin = () => ({
    type: Actions.FETCH_ITEMS_BEGIN
});

export const fetchItemsSuccess = items => ({
    type: Actions.FETCH_ITEMS_SUCCESS,
    payload: {items}
});

export const fetchItemsFailure = error => ({
    type: Actions.FETCH_ITEMS_FAILURE,
    payload: {error}
});


// spinner or smth like that
export const createItemBegin = () => ({
    type: Actions.CREATE_ITEM_BEGIN
});

export const createItemSuccess = items => ({
    type: Actions.CREATE_ITEM_SUCCESS,
    payload: {items}
});

export const createItemFailure = error => ({
    type: Actions.CREATE_ITEM_FAILURE,
    payload: {error}
});
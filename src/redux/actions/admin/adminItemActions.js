import * as Actions from '../Actions'

export const fetchAdminItemsSuccess = adminItems => ({
    type: Actions.FETCH_ADMIN_ITEMS_SUCCESS,
    payload: {adminItems}
});

export const updateAdminItemSuccess = adminItem => ({
    type: Actions.MODIFY_ADMIN_ITEM_SUCCESS,
    payload: {adminItem}
});

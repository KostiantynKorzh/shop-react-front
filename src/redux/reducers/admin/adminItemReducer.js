import * as Actions from '../../actions/Actions';

const initialState = {
    adminItems: [],
    loading: false,
    error: null
}

const updateOneItem = (items, item) => {
    let newItems = [];
    items.forEach(tempItem => {
        if (tempItem.pk === item.pk) {
            newItems.append(item);
        } else {
            newItems.append(tempItem);
        }
    });

    return newItems;
}

export const adminItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.FETCH_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case Actions.FETCH_ADMIN_ITEMS_SUCCESS:
            return {
                loading: true,
                error: null,
                adminItems: action.payload.adminItems
            };
        case Actions.MODIFY_ADMIN_ITEM_SUCCESS:
            return {
                loading: true,
                error: null,
                adminItems: updateOneItem(state.adminItems, action.payload.adminItem)
            };
        case Actions.FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
};
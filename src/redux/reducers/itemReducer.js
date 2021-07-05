import * as Actions from '../actions/Actions'

const initialState = {
    items: [],
    loading: false,
    error: null
}

export const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.FETCH_ITEMS_BEGIN || Actions.CREATE_ITEM_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case Actions.FETCH_ITEMS_SUCCESS || Actions.CREATE_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.items
            };
        case Actions.FETCH_ITEMS_FAILURE || Actions.CREATE_ITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return {
                ...state
            }
    }
}
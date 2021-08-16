import * as Actions from '../actions/Actions';

const initialState = {
    items: [],
    loading: false,
    error: null
}

export const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.FETCH_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case Actions.FETCH_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.items
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
}
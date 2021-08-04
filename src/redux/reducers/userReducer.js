import * as Actions from '../actions/Actions';

const initialState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.FETCH_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case Actions.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload.users
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


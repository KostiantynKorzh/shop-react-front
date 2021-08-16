import * as Actions from '../../actions/Actions';

const initialState = {
    adminUsers: [],
    loading: false,
    error: null
}

export const adminUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.FETCH_BEGIN:
            return {
                loading: true,
                error: null,
                adminUsers: []
            }
        case Actions.FETCH_ADMIN_USERS_SUCCESS:
            return {
                loading: false,
                error: null,
                adminUsers: action.payload.adminUsers
            }
        case Actions.MODIFY_ADMIN_USER_SUCCESS:
            return {
                loading: false,
                error: null,
                adminUsers: action.payload.adminUsers
            }
        case Actions.FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            }
        default:
            return state;
    }
};
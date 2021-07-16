import * as Actions from '../actions/Actions'
import AuthService from "../../services/AuthService";

const getInitialState = () => {
    return AuthService.getUsername() !== null;
}

const initialState = {
    isAuthenticated: getInitialState()
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.STORE_USER:
            return {
                isAuthenticated: true
            }
        case Actions.UNSTORE_USER:
            return {
                isAuthenticated: false
            }
        default:
            return {
                ...state
            }
    }
}
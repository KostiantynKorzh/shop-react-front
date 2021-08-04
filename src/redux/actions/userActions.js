import * as Actions from './Actions'

export const fetchUsersSuccess = users => ({
    type: Actions.FETCH_USERS_SUCCESS,
    payload: {users}
});
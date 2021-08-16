import * as Actions from '../Actions'

export const fetchAdminUsersSuccess = adminUsers => ({
    type: Actions.FETCH_ADMIN_USERS_SUCCESS,
    payload: {adminUsers}
});

export const updateAdminUserSuccess = adminUsers => ({
    type: Actions.MODIFY_ADMIN_USER_SUCCESS,
    payload: adminUsers
});
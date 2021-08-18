import {fetchBegin, fetchFailure} from "../../redux/actions/fetchActions";
import axios from "axios";
import {ADMIN_URL, USER_URL} from "../../utils/Constants";
import {fetchAdminUsersSuccess} from "../../redux/actions/admin/adminUserReducer";

const getAllUsers = () => dispatch => {
    dispatch(fetchBegin());
    axios.get(ADMIN_URL + 'users/')
        .then(resp => dispatch(fetchAdminUsersSuccess(resp.data)))
        .catch(error => dispatch(fetchFailure(error)));
};

const createNewUser = (username, email) => dispatch => {
    axios.post(ADMIN_URL + 'users/', {username, email});
}

const updateUser = (id, username, email) => {
    axios.put(ADMIN_URL + 'users/' + id, {username, email});
}

const deleteUser = (id) => {
    axios.delete(ADMIN_URL + 'users/' + id);
};

const disableUser = (username) => {
    return axios.delete(USER_URL + "users/?username=" + username);
};

const enableUser = (username) => {
    return axios.put(USER_URL + "users/?username=" + username);
};

export default {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
    disableUser,
    enableUser
}
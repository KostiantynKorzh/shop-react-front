import axios from "axios";
import {ADMIN_URL} from "../utils/Constants";
import {fetchBegin, fetchFailure} from "../redux/actions/fetchActions";
import {fetchUsersSuccess} from "../redux/actions/userActions";
import {fetchAdminItemsSuccess, updateAdminItemSuccess} from "../redux/actions/admin/adminItemActions";
import {fetchAdminUsersSuccess} from "../redux/actions/admin/adminUserReducer";

// TODO Remove ItemService and implement Redux for all methods

const getAllItems = () => dispatch => {
    dispatch(fetchBegin());
    axios.get(ADMIN_URL + 'items/')
        .then(resp => dispatch(fetchAdminItemsSuccess(resp.data)))
        .catch(error => dispatch(fetchFailure(error)));
}

const createNewItem = (title, price, imagePath) => dispatch => {
    dispatch(fetchBegin());
    axios.post(ADMIN_URL + 'items/', {title, price, imagePath})
        .then(() => dispatch(getAllItems()))
        .catch(error => dispatch(fetchFailure(error)));
}

const updateItem = (id, title, price, imagePath) => dispatch => {
    axios.put(ADMIN_URL + 'items/' + id, {title, price, imagePath})
        .then(resp => dispatch(updateAdminItemSuccess(resp.data)))
        .catch(error => dispatch(fetchFailure(error)));
}

const deleteItem = (id) => {
    axios.delete(ADMIN_URL + 'items/' + id);
}

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

export default {
    getAllItems,
    createNewItem,
    updateItem,
    deleteItem,
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}
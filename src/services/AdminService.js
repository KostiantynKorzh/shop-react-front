import {
    createItemBegin,
    createItemFailure,
    fetchItemsBegin,
    fetchItemsFailure,
    fetchItemsSuccess
} from "../redux/actions/itemActions";
import axios from "axios";
import {ADMIN_URL} from "../utils/Constants";
import {fetchBegin, fetchFailure} from "../redux/actions/fetchActions";
import {fetchUsersSuccess} from "../redux/actions/userActions";

// TODO Remove ItemService and implement Redux for all methods

const getAllItems = () => dispatch => {
    dispatch(fetchItemsBegin());
    axios.get(ADMIN_URL + 'items/')
        .then(resp => dispatch(fetchItemsSuccess(resp.data)))
        .catch(error => dispatch(fetchItemsFailure(error)));
}

const createNewItem = (title, price, imagePath) => dispatch => {
    dispatch(createItemBegin());
    axios.post(ADMIN_URL + 'items/', {title, price, imagePath})
        .then(() => dispatch(getAllItems()))
        .catch(error => dispatch(createItemFailure(error)));
}

const updateItem = (id, title, price, imagePath) => {
    axios.put(ADMIN_URL + 'items/' + id, {title, price, imagePath});
}

const deleteItem = (id) => {
    axios.delete(ADMIN_URL + 'items/' + id);
}

const getAllUsers = () => dispatch => {
    dispatch(fetchBegin());
    axios.get(ADMIN_URL + 'users/')
        .then(resp => dispatch(fetchUsersSuccess(resp.data)))
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
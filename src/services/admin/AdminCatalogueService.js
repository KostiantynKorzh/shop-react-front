import {fetchBegin, fetchFailure} from "../../redux/actions/fetchActions";
import axios from "axios";
import {ADMIN_URL} from "../../utils/Constants";
import {fetchAdminItemsSuccess, updateAdminItemSuccess} from "../../redux/actions/admin/adminItemActions";

const getAllItems = () => dispatch => {
    dispatch(fetchBegin());
    axios.get(ADMIN_URL + 'items/')
        .then(resp => dispatch(fetchAdminItemsSuccess(resp.data)))
        .catch(error => dispatch(fetchFailure(error)));
};

const createNewItem = (title, price, imagePath) => dispatch => {
    dispatch(fetchBegin());
    axios.post(ADMIN_URL + 'items/', {title, price, imagePath})
        .then(() => dispatch(getAllItems()))
        .catch(error => dispatch(fetchFailure(error)));
};

const updateItem = (id, title, price, imagePath) => dispatch => {
    axios.put(ADMIN_URL + 'items/' + id + '/', {title, price, imagePath})
        .then(resp => dispatch(updateAdminItemSuccess(resp.data)))
        .catch(error => dispatch(fetchFailure(error)));
};

const deleteItem = (id) => {
    axios.delete(ADMIN_URL + 'items/' + id + '/');
};

export default {
    getAllItems,
    createNewItem,
    updateItem,
    deleteItem,
}
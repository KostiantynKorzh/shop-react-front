import {
    createItemBegin,
    createItemFailure,
    fetchItemsBegin,
    fetchItemsFailure,
    fetchItemsSuccess
} from "../redux/actions/itemActions";
import axios from "axios";
import {ADMIN_URL} from "../utils/Constants";

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

export default {
    getAllItems,
    createNewItem,
    updateItem,
    deleteItem
}
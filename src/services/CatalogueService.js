import axios from 'axios';
import {CATALOGUE_URL} from "../utils/Constants";
import {
    createItemBegin, createItemFailure,
    createItemSuccess,
    fetchItemsBegin,
    fetchItemsFailure,
    fetchItemsSuccess
} from "../redux/actions/itemActions";

const getAllItems = () => dispatch => {
    dispatch(fetchItemsBegin());
    axios.get(CATALOGUE_URL + 'items/')
        .then(resp => dispatch(fetchItemsSuccess(resp.data)))
        .catch(error => dispatch(fetchItemsFailure(error)));
}

const createNewItem = (title, price, imagePath) => dispatch => {
    dispatch(createItemBegin());
    axios.post(CATALOGUE_URL + 'items/', {title, price, imagePath})
        .then(() => dispatch(getAllItems()))
        .catch(error => dispatch(createItemFailure(error)));
}

export default {
    getAllItems,
    createNewItem
}
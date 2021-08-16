import axios from 'axios';
import {CATALOGUE_URL} from "../utils/Constants";
import {fetchItemsSuccess} from "../redux/actions/itemActions";
import {fetchBegin, fetchFailure} from "../redux/actions/fetchActions";
import {useSelector} from "react-redux";
import {itemReducer} from "../redux/reducers/itemReducer";


const getAllItems = () => dispatch => {
    dispatch(fetchBegin());
    axios.get(CATALOGUE_URL + 'items/')
        .then(resp => dispatch(fetchItemsSuccess(resp.data)))
        .catch(error => dispatch(fetchFailure(error)));
}

const createNewItem = (title, price, imagePath) => dispatch => {
    dispatch(fetchBegin());
    axios.post(CATALOGUE_URL + 'items/', {title, price, imagePath})
        .then(() => dispatch(getAllItems()))
        .catch(error => dispatch(fetchFailure(error)));
}

export default {
    getAllItems,
    createNewItem
}
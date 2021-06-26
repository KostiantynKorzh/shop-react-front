import axios from 'axios';
import {CATALOGUE_URL} from "../utils/Constants";

const getAllItems = () => {
    return axios.get(CATALOGUE_URL)
}

const createNewItem = (title, price, imagePath) => {
    return axios.post(CATALOGUE_URL, {title, price, imagePath})
}

export default {
    getAllItems,
    createNewItem
}
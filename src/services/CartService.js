import axios from "axios";
import {ORDER_URL} from "../utils/Constants";
import {ADD_ITEM_TO_CART} from "../redux/actions/Actions";

const saveCart = (userName, items) => {
    console.log(items);
};

const addItemToCart = (userId, itemId, quantity) => dispatch => {
    console.log(userId, itemId, quantity)
    console.log(ORDER_URL + 'orders/')
    axios.post(ORDER_URL + 'orders/', {userId, itemId, quantity})
        .then(resp => dispatch(ADD_ITEM_TO_CART(resp.data)))
        .catch(console.log);
};

const deleteItemFromCart = (userId, itemId, quantity) => {

};

export default {
    saveCart,
    addItemToCart
}
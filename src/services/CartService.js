import axios from "axios";
import {ORDER_URL} from "../utils/Constants";
import {ADD_ITEM_TO_CART} from "../redux/actions/Actions";
import UserService from "./UserService";

const getCart = () => {
    return UserService.getUserIdByUsername()
        .then(resp => {
            const url = ORDER_URL + 'orders/user-orders/' + resp;
            console.log(url);
            axios.get(url);
        });

};

const addItemToCart = (itemId, quantity) => dispatch => {
    UserService.getUserIdByUsername().then(resp => {
        const userId = resp.data;
        axios.post(ORDER_URL + 'orders/', {userId, itemId, quantity})
            .then(resp => dispatch(ADD_ITEM_TO_CART(resp.data)))
            .catch(console.log);
    })
};

const buy = () => {
    UserService.getUserIdByUsername().then(resp => {
        const url = ORDER_URL + 'orders/user-orders/' + resp.data
        console.log(url)
        axios.post(url)
            .then(resp => {
                console.log(resp.data)
            })
            .catch(console.log);
    });
};

export default {
    getCart,
    addItemToCart,
    buy
}
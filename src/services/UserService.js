import axios from "axios";
import {USER_URL} from "../utils/Constants";


const getAllUsers = () => {
    // dispatch
    return axios.get(USER_URL);
}

const getUserById = (id) => {
    return axios.get(USER_URL + id);
}

export default {
    getAllUsers,
    getUserById
}
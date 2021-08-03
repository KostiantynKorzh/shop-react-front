import axios from "axios";
import {USER_URL} from "../utils/Constants";
import AuthService from "./AuthService";


const getAllUsers = () => {
    // dispatch
    return axios.get(USER_URL + "users/");
}

const getUserById = (id) => {
    return axios.get(USER_URL + "users/" + id);
}

const getUserIdByUsername = () => {
    const username = AuthService.getUsername();
    console.log("test", username);
    return axios.post(USER_URL + "users/" + 'userId/', {username: username});
}

export default {
    getAllUsers,
    getUserById,
    getUserIdByUsername
}
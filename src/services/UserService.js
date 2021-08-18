import axios from "axios";
import {USER_URL} from "../utils/Constants";
import AuthService from "./AuthService";
import {fetchBegin} from "../redux/actions/fetchActions";
import {fetchUsersSuccess} from "../redux/actions/userActions";


const getAllUsers = () => dispatch => {
    dispatch(fetchBegin())
    axios.get(USER_URL + "users/")
        .then(resp => dispatch(fetchUsersSuccess(resp)));
}

const getUserById = (id) => {
    return axios.get(USER_URL + "users/" + id);
}

const getUserIdByUsername = () => {
    const username = AuthService.getUsername();
    return axios.post(USER_URL + "users/" + 'userId/', {username: username});
}



export default {
    getAllUsers,
    getUserById,
    getUserIdByUsername,
}
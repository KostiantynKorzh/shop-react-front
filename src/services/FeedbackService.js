import axios from "axios";
import {FEEDBACK_URL} from "../utils/Constants";


const createFeedback = (subject, content) => {
    return axios.post(FEEDBACK_URL, {subject, content})
}

export default {
    createFeedback
}
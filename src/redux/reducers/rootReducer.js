import {combineReducers} from "redux";
import {itemReducer} from "./itemReducer";
import {authReducer} from "./authReducer";
import {userReducer} from "./userReducer";
import {adminItemReducer} from "./admin/adminItemReducer"
import {adminUserReducer} from "./admin/adminUserReducer"

export default combineReducers({
    adminItemReducer,
    adminUserReducer,
    userReducer,
    itemReducer,
    authReducer
})
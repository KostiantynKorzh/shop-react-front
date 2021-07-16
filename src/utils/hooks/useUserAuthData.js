import {useEffect, useState} from "react";
import AuthService from "../../services/AuthService";
import {useSelector} from "react-redux";

export const useUserAuthData = () => {

    const [user, setUser] = useState(null);

    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);

    useEffect(() => {
        const username = AuthService.getUsername();
        if (username !== null) {
            setUser({username});
        }
    }, []);

    useEffect(() => {
        const username = AuthService.getUsername();
        if (username !== null) {
            setUser({username});
        }
    }, [isAuthenticated]);

    return user;
};
import React from 'react';
import AuthForm from "./AuthForm";
import AuthService from "../../../services/AuthService";
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";

const Login = () => {

    const dispatch = useDispatch();

    return (
        <>
            <AuthForm buttonText={"Login"} onClick={AuthService.login}/>
            <Button variant="contained" color="primary"
                    onClick={() => dispatch(AuthService.logout())}>
                Logout
            </Button>
            <Button variant="contained" color="primary"
                    onClick={() => {
                        console.log(AuthService.getUsername());;
                        AuthService.disableUser("test10");
                    }}>
                Check
            </Button>
            <Button variant="contained" color="primary"
                    onClick={() => AuthService.disableUser('test10')}>
                Disable user
            </Button>
            <Button variant="contained" color="primary"
                    onClick={() => AuthService.enableUser('test10')}>
                Enable user
            </Button>
        </>
    );
}

export default Login;
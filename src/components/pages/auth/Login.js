import React from 'react';
import AuthForm from "./AuthForm";
import AuthService from "../../../services/AuthService";
import {Button} from "@material-ui/core";

const Login = () => {
    return (
        <>
            <AuthForm buttonText={"Login"} onClick={AuthService.login}/>
            <Button variant="contained" color="primary"
                    onClick={() => AuthService.logout()}>
                Logout
            </Button>
            <Button variant="contained" color="primary"
                    onClick={() => AuthService.getUserSession()}>
                Check
            </Button>
        </>
    );
}

export default Login;
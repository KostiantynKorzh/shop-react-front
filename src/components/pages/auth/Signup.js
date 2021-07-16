import React from 'react';
import AuthService from "../../../services/AuthService";
import AuthForm from "./AuthForm";

const Signup = () => {
    return (
        <>
            <AuthForm buttonText={"Sign up"} onClick={AuthService.signup}/>
        </>
    );
};

export default Signup;
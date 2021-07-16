import {CognitoUserPool, CognitoUser, AuthenticationDetails, CognitoUserAttribute} from 'amazon-cognito-identity-js';
import {USER_URL} from "../utils/Constants";
import axios from "axios";

const pool = {
    UserPoolId: 'eu-central-1_0HWkkPINc',
    ClientId: '37ondtr8ghd6nf68crrfk8ksor'
}

const UserPool = new CognitoUserPool(pool);

const login = (username, password) => {
    const user = new CognitoUser({
        Username: username,
        Pool: UserPool
    });

    const authDetails = new AuthenticationDetails({
        Username: username,
        Password: password
    });

    user.authenticateUser(authDetails, {
        onSuccess: data => {
            console.log("Success", data);
        },
        onFailure: data => {
            console.log("Failure", data);
        }
    })
};

const signup = (username, email, password) => {
    UserPool.signUp(username, password, [new CognitoUserAttribute({Name: 'email', Value: email})],
        null, (err, res) => {
            if (err) {
                console.log(err);
            } else if (res) {
                console.log(res);
                saveUserOnSever(username, email);
            }
        })
};

const logout = () => {
    UserPool.getCurrentUser().signOut();
}

const verify = (username, code) => {
    const user = new CognitoUser({
        Username: username,
        Pool: UserPool
    });

    user.getAttributeVerificationCode('email', {
        onSuccess: function (result) {
            console.log('call result: ' + result);
        },
        onFailure: function (err) {
            console.log(err.message || JSON.stringify(err));
        },
        inputVerificationCode: function () {
            user.verifyAttribute('email', code, this);
        },
    });

    // user.verifyAttribute('email', code, {
    //     onSuccess: data => console.log(data),
    //     onFailure: err => console.log(err)
    // });
}

const saveUserOnSever = (username, email) => {
    // axios.post(USER_URL, {
    //     username: username,
    //     email: email
    // })
}

const getUserSession = () => {
    if (UserPool.getCurrentUser() != null) {
        console.log(UserPool.getCurrentUser().getUsername());
    } else {
        console.log("no user");
    }
}

export default {
    login,
    signup,
    logout,
    verify,
    getUserSession
}
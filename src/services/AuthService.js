import {AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool} from 'amazon-cognito-identity-js';
import {storeUser, unstoreUser} from "../redux/actions/authActions";
import * as AWS from 'aws-sdk';
import {CLIENT_ID, IDENTITY_POOL_ID, USER_POOL_ID} from "../utils/Constants";
import AdminUserService from "./admin/AdminUserService";

const pool = {
    UserPoolId: USER_POOL_ID,
    ClientId: CLIENT_ID
}

const UserPool = new CognitoUserPool(pool);

AWS.config.update({
    region: 'eu-central-1',
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_ACCESS_SECRET
});

const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();


const login = (username, password) => dispatch => {
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
            const accessToken = data.getAccessToken().getJwtToken();

            AWS.config.region = 'eu-central-1';

            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: IDENTITY_POOL_ID,
                Logins: {
                    'cognito-idp.eu-central-1.amazonaws.com/eu-central-1_0HWkkPINc': data
                        .getIdToken()
                        .getJwtToken(),
                },
            });

            console.log(data)

            //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
            AWS.config.credentials.refresh(error => {
                if (error) {
                    console.error(error);
                } else {
                    // Instantiate aws sdk service objects now that the credentials have been updated.
                    // example: var s3 = new AWS.S3();
                    console.log('Successfully logged!');
                }
            });
            dispatch(storeUser());
        },
        onFailure: data => {
            console.log("Failure", data);
        }
    })
};

const disableUser = (username) => {

    const params = {
        UserPoolId: USER_POOL_ID,
        Username: username
    };

    AdminUserService.disableUser(username)
        .then(() => {
            cognitoIdentityServiceProvider.adminDisableUser(params, function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        })
        .catch(console.log)
};

const enableUser = (username) => {

    const params = {
        UserPoolId: USER_POOL_ID,
        Username: username
    };

    AdminUserService.enableUser(username)
        .then(() => {
            cognitoIdentityServiceProvider.adminEnableUser(params, function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        })
        .catch(console.log)
};


const signup = (username, email, password) => {
    UserPool.signUp(username, password, [new CognitoUserAttribute({Name: 'email', Value: email})],
        null, (err, res) => {
            if (err) {
                console.log(err);
            } else if (res) {
                console.log(res);
            }
        })
};

const logout = () => dispatch => {
    if (UserPool.getCurrentUser() != null) {
        UserPool.getCurrentUser().signOut();
        dispatch(unstoreUser());
    }
};

const getUsername = () => {
    if (UserPool.getCurrentUser() != null) {
        return UserPool.getCurrentUser().getUsername();
    }
    return null;
};

export default {
    login,
    signup,
    logout,
    getUsername,
    disableUser,
    enableUser
}
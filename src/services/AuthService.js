import {AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool} from 'amazon-cognito-identity-js';
import {storeUser, unstoreUser} from "../redux/actions/authActions";
import * as AWS from 'aws-sdk/global';

const pool = {
    UserPoolId: 'eu-central-1_0HWkkPINc',
    ClientId: '37ondtr8ghd6nf68crrfk8ksor'
}

const UserPool = new CognitoUserPool(pool);

const login = (username, password) => dispatch => {
    const user = new CognitoUser({
        Username: username,
        Pool: UserPool
    });

    const authDetails = new AuthenticationDetails({
        Username: username,
        Password: password
    });

    const userData = {
        Username: username,
        Pool: UserPool,
    }

    const cognitoUser = new CognitoUser(userData);

    user.authenticateUser(authDetails, {
        onSuccess: data => {
            const accessToken = data.getAccessToken().getJwtToken();

            AWS.config.region = 'eu-central-1';

            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: 'eu-central-1:093ceb44-d764-4cef-9123-4902b066d5f8',
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
}

// const getUsername = () => {
//     return new Promise((resolve, reject) => {
//         if (UserPool.getCurrentUser() != null) {
//             return resolve(UserPool.getCurrentUser().getUsername());
//         }
//         return reject("No authenticated user");
//     });
// };

const getUsername = () => {
    if (UserPool.getCurrentUser() != null) {
        return UserPool.getCurrentUser().getUsername();
    }
    return null;
};

const disableUser = (username) => {
    const user = UserPool.getCurrentUser();

    user.getSession(function (err, session) {
        console.log(session);
        user.getUserAttributes(function (err, result) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            for (let i = 0; i < result.length; i++) {
                console.log('attribute ' + result[i].getName() + ' has value ' + result[i].getValue());
            }
        });
    });
};

export default {
    login,
    signup,
    logout,
    getUsername,
    disableUser
}
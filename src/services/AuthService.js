import {AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool} from 'amazon-cognito-identity-js';
import {storeUser, unstoreUser} from "../redux/actions/authActions";

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

    user.authenticateUser(authDetails, {
        onSuccess: data => {
            console.log("Success", data);
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
    UserPool.getCurrentUser().signOut();
    dispatch(unstoreUser());
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

export default {
    login,
    signup,
    logout,
    getUsername
}
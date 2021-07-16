import React, {useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";

const AuthForm = (props) => {

    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <form action="">
                {props.buttonText === 'Sign up' ?
                    <>
                        <div>
                            <TextField
                                label={"Username"}
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                label={"Email"}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    </> :
                    <div>
                        <TextField
                            label={"Username"}
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                }
                <div>
                    <TextField
                        type="password"
                        label={"Password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <Button variant="contained" color="primary"
                        onClick={() => {
                            if (props.buttonText === 'Sign up') {
                                props.onClick(username, email, password);
                            } else {
                                dispatch(props.onClick(username, password));
                            }
                            setUsername('');
                            setEmail('');
                            setPassword('');
                        }}>
                    {props.buttonText}
                </Button>
            </form>
        </>
    );
};

export default AuthForm;
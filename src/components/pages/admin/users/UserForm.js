import React, {useEffect, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import AdminService from "../../../../services/AdminService";

const UserForm = ({open, setOpen, user}) => {

    const dispatch = useDispatch();

    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');

    useEffect(() => {
        if (user) {
            console.log(user)
            setNewUsername(user.fields.username);
            setNewEmail(user.fields.email);
        }
    }, [open])

    return (
        <>
            <Dialog open={open}
                    onClose={() => setOpen(false)}
                // styles={{minWidth: 120}}
                    fullWidth={120}
            >
                <DialogTitle id="form-dialog-title">Create new item</DialogTitle>
                <DialogContent>
                    {/*<DialogContentText>*/}
                    {/*    To subscribe to this website, please enter your email address here. We will send updates*/}
                    {/*    occasionally.*/}
                    {/*</DialogContentText>*/}
                    <div>
                        <TextField
                            label={"Username"}
                            value={newUsername}
                            onChange={e => setNewUsername(e.target.value)}
                            fullWidth={true}
                        >
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            label={"Email"}
                            value={newEmail}
                            onChange={e => setNewEmail(e.target.value)}
                            fullWidth={true}
                        >
                        </TextField>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary"
                            onClick={() => {
                                if (user) {
                                    AdminService.updateUser(user.pk, newUsername, newEmail)
                                } else {
                                    dispatch(AdminService.createNewUser(newUsername, newEmail));
                                }
                                setNewUsername('');
                                setNewEmail('');
                                setOpen(false);
                            }}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>


        </>
    );
};

export default UserForm;
import React, {useEffect, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import AdminUserService from "../../../../services/admin/AdminUserService";

const UserForm = ({open, setOpen, user}) => {

    const dispatch = useDispatch();

    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');

    useEffect(() => {
        if (user) {
            console.log(user)
            setNewUsername(user.username);
            setNewEmail(user.email);
        }
    }, [open])

    return (
        <>
            <Dialog open={open}
                    onClose={() => setOpen(false)}
            >
                <DialogTitle id="form-dialog-title">Create new item</DialogTitle>
                <DialogContent>
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
                                    dispatch(AdminUserService.updateUser(user.id, newUsername, newEmail))
                                } else {
                                    dispatch(AdminUserService.createNewUser(newUsername, newEmail));
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
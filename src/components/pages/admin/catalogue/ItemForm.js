import React, {useEffect, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import AdminCatalogueService from "../../../../services/admin/AdminCatalogueService";

const ItemForm = ({open, setOpen, item}) => {

    const dispatch = useDispatch();

    const [newTitle, setNewTitle] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newImage, setNewImage] = useState('');

    useEffect(() => {
        if (item) {
            setNewTitle(item.title);
            setNewPrice(item.price);
            setNewImage(item.imagePath);
        }
    }, [open])

    return (
        <>
            <Dialog open={open}
                    onClose={() => setOpen(false)}
                // styles={{minWidth: 120}}
            >
                <DialogTitle id="form-dialog-title">Create new item</DialogTitle>
                <DialogContent>
                    <div>
                        <TextField
                            label={"Title"}
                            value={newTitle}
                            onChange={e => setNewTitle(e.target.value)}
                            fullWidth={true}
                        >
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            label={"Price"}
                            value={newPrice}
                            onChange={e => setNewPrice(e.target.value)}
                            fullWidth={true}
                        >
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            label={"Image path"}
                            value={newImage}
                            onChange={e => setNewImage(e.target.value)}
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
                                if (item) {
                                    dispatch(AdminCatalogueService.updateItem(item.id, newTitle, newPrice, newImage));
                                } else {
                                    dispatch(AdminCatalogueService.createNewItem(newTitle, newPrice, newImage));
                                }
                                setNewTitle('');
                                setNewPrice('');
                                setNewImage('')
                                setOpen(false);
                            }}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>


        </>
    );
};

export default ItemForm;
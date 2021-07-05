import React, {useEffect, useState} from 'react';
import CatalogueService from "../../../services/CatalogueService";
import {Button, Grid, TextField, Typography} from "@material-ui/core";
import ItemCard from "../../catalogue/ItemCard";
import UserDefaultLayout from "../layouts/UserDefaultLayout";
import {useDispatch, useSelector} from "react-redux";

const Catalogue = (props) => {

    const items = useSelector(state => state.itemReducer.items);

    const dispatch = useDispatch();

    const [newTitle, setNewTitle] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newImage, setNewImage] = useState('');

    useEffect(() => {
        dispatch(CatalogueService.getAllItems());
    }, [dispatch])


    return (
        <>
            <UserDefaultLayout>
                <Typography variant="h1" gutterBottom>
                    Catalogue
                </Typography>
                <Grid container spacing={3}>
                    {items && items.map(item => (
                        <Grid item xs={12} md={6} lg={4}>
                            <ItemCard
                                {...props}
                                item={item}/>
                        </Grid>
                    ))}
                </Grid>
                <form>
                    <div>
                        <TextField
                            label={"Title"}
                            value={newTitle}
                            onChange={e => setNewTitle(e.target.value)}>
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            label={"Price"}
                            value={newPrice}
                            onChange={e => setNewPrice(e.target.value)}>
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            label={"Image path"}
                            value={newImage}
                            onChange={e => setNewImage(e.target.value)}>
                        </TextField>
                    </div>
                    <Button variant="contained" color="primary"
                            onClick={() => {
                                dispatch(CatalogueService.createNewItem(newTitle, newPrice, newImage));
                                setNewTitle('');
                                setNewPrice('');
                                setNewImage('')
                            }}>
                        Submit
                    </Button>
                </form>
            </UserDefaultLayout>
        </>
    );
};

export default Catalogue;
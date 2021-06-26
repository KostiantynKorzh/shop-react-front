import React, {useEffect, useState} from 'react';
import CatalogueService from "../services/CatalogueService";
import {Button, Grid, TextField, Typography} from "@material-ui/core";
import ItemCard from "../components/catalogue/ItemCard";

const Catalogue = () => {

    const [items, setItems] = useState([]);

    const [newTitle, setNewTitle] = useState('');
    const [newPrice, setNewPrice] = useState('');

    const fetchItems = () => {
        CatalogueService.getAllItems()
            .then(resp => setItems(resp.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchItems();
    }, [])


    return (
        <>
            <Typography variant="h1" gutterBottom>
                Catalogue
            </Typography>
            <Grid container spacing={3}>
                {items.map(item => (
                    <Grid item xs={12} md={6} lg={4}>
                        <ItemCard title={item.title} price={item.price}/>
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
                <Button variant="contained" color="primary"
                        onClick={() => {
                            CatalogueService.createNewItem(newTitle, newPrice)
                                .then(() => fetchItems());
                            setNewTitle('');
                            setNewPrice(0);
                        }}>
                    Submit
                </Button>
            </form>
        </>
    );
};

export default Catalogue;
import React, {useEffect, useState} from 'react';
import CatalogueService from "../services/CatalogueService";
import {Button, List, ListItem, TextField} from "@material-ui/core";

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
            Catalogue
            <List>
                {items.map(item => (
                    <ListItem>{item.title} : {item.price}</ListItem>
                ))}
            </List>
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
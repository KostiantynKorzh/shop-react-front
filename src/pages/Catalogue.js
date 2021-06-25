import React, {useEffect, useState} from 'react';
import CatalogueService from "../services/CatalogueService";

const Catalogue = () => {

    const [items, setItems] = useState([]);

    const [newTitle, setNewTitle] = useState('');
    const [newPrice, setNewPrice] = useState(0);

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
            <ul>
                {items.map(item => (
                    <li>{item.title} : {item.price}</li>
                ))}
            </ul>
            <form>
                <label>
                    Title:
                    <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)}/>
                </label>
                <label>
                    Price:
                    <input type="text" value={newPrice} onChange={e => setNewPrice(e.target.value)}/>
                </label>
                <input type="button" onClick={() => {
                    CatalogueService.createNewItem(newTitle, newPrice)
                        .then(() => fetchItems());
                    setNewTitle('');
                    setNewPrice(0);
                }}/>
            </form>
        </>
    );
};

export default Catalogue;
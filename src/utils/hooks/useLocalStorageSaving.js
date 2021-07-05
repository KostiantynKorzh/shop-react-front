import {useEffect, useState} from "react";

export const useLocalStorageSaving = (itemToSave) => {

    const [item, setItem] = useState({});

    useEffect(() => {
        if (itemToSave !== undefined) {
            localStorage.setItem('currentItem', JSON.stringify(itemToSave));
        }
        setItem(JSON.parse(localStorage.getItem('currentItem')));

        return () => localStorage.removeItem('currentItem');
    }, [])

    return item;

};
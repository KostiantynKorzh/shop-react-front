import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export const useCollectionFromStore = (collection, fetchFunction) => {

    const dispatch = useDispatch();

    useEffect(() => {
        if (collection.length <= 0) {
            dispatch(fetchFunction);
        }
    }, [dispatch])

};
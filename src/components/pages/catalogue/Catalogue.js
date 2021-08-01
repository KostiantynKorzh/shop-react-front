import React, {useEffect} from 'react';
import CatalogueService from "../../../services/CatalogueService";
import {Grid, Typography} from "@material-ui/core";
import ItemCard from "./ItemCard";
import UserDefaultLayout from "../layouts/UserDefaultLayout";
import {useDispatch, useSelector} from "react-redux";

const Catalogue = (props) => {

    const items = useSelector(state => state.itemReducer.items);

    const dispatch = useDispatch();

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
            </UserDefaultLayout>
        </>
    );
};

export default Catalogue;
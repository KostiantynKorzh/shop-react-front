import React, {useEffect, useRef} from 'react';
import CatalogueService from "../../../services/CatalogueService";
import {Grid, Typography} from "@material-ui/core";
import ItemCard from "./ItemCard";
import UserDefaultLayout from "../layouts/UserDefaultLayout";
import {useDispatch, useSelector} from "react-redux";
import LoadingSpinner from "../../common/LoadingSpinner";
import ErrorPage from "../../common/ErrorPage";
import {useCollectionFromStore} from "../../../utils/hooks/useCollectionFromStore";

const Catalogue = (props) => {

    const items = useSelector(state => state.itemReducer.items);
    const loading = useSelector(state => state.itemReducer.loading);
    const error = useSelector(state => state.itemReducer.error);

    useCollectionFromStore(items, CatalogueService.getAllItems());

    return (
        <>
            <UserDefaultLayout>
                {loading
                    ?
                    <LoadingSpinner/>
                    :
                    error
                        ?
                        <ErrorPage error={error}/>
                        :
                        <>
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
                        </>
                }
            </UserDefaultLayout>
        </>
    );
};

export default Catalogue;
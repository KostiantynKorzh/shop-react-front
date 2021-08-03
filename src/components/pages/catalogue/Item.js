import React from 'react';
import UserDefaultLayout from "../layouts/UserDefaultLayout";
import {Grid, IconButton, Paper, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useLocalStorageSaving} from "../../../utils/hooks/useLocalStorageSaving";
import {useParams} from "react-router";
import AddIcon from '@material-ui/icons/Add';
import CartService from "../../../services/CartService";
import UserService from "../../../services/UserService";

const Item = () => {

    const {id} = useParams();

    const itemFromRedux = useSelector(state => state.itemReducer.items.find(item => item.id == id))

    const item = useLocalStorageSaving(itemFromRedux);

    const dispatch = useDispatch();

    return (
        <>
            <UserDefaultLayout>
                <Grid container alignItems="center"
                    // style={{border: 'solid green 3px'}}
                >
                    <Grid item xs={6} align={"center"}>
                        <Paper elevation={0}
                               style={{
                                   maxHeight: '50vh',
                                   // border: 'solid blue 2px'
                               }}>
                            <img
                                src={item && item.imagePath}
                                style={{
                                    height: '50vh'
                                }}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}
                          style={{
                              // border: 'solid red 5px',
                              minHeight: '70vh'
                          }}>
                        <Typography align="center" variant={"h1"}>
                            {item && item.title}
                        </Typography>
                        <IconButton
                            style={{
                                position: 'relative',
                                right: '-500px',
                                top: '55vh'
                            }}
                            onClick={() => {
                                UserService.getUserIdByUsername()
                                    .then(console.log)
                                    .catch(console.log)
                                dispatch(CartService.addItemToCart(parseInt(id), 44))
                            }}
                        >
                            <AddIcon/>
                        </IconButton>
                        <Typography align={"right"}
                                    style={{
                                        position: 'relative',
                                        right: '30px',
                                        top: '50vh'
                                    }}>
                            <p>Price: {item && item.price}</p>
                        </Typography>
                    </Grid>
                </Grid>
            </UserDefaultLayout>
        </>
    );
};

export default Item;
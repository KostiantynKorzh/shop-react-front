import React, {useEffect} from 'react';
import UserDefaultLayout from "../layouts/UserDefaultLayout";
import {Grid, Paper, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {useLocalStorageSaving} from "../../../utils/hooks/useLocalStorageSaving";

const Item = (props) => {

    const itemFromRedux = useSelector(state => state.itemReducer.items.find(item => item.id == props.match.params.id))

    const item = useLocalStorageSaving(itemFromRedux);

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
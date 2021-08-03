import React, {useEffect, useState} from 'react';
import {Grid, GridList, SvgIcon} from "@material-ui/core";
import {Link} from "react-router-dom";
import AuthService from "../../../services/AuthService";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import UserService from "../../../services/UserService";
import {ORDER_URL} from "../../../utils/Constants";
import axios from "axios";

const UserHeader = () => {

    const user = AuthService.getUsername();

    const [cart, setCart] = useState();

    useEffect(() => {
        UserService.getUserIdByUsername()
            .then(resp => {
                console.log(resp)
                const url = ORDER_URL + 'orders/user-orders/' + resp.data;
                console.log(url);
                axios.get(url)
                    .then(resp => setCart(resp.data));
            });
    }, [])

    return (
        <>
            <div className={"navbar-fake"}>
                <div className={"navbar"}>
                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <ul style={{marginLeft: "10%"}}>
                                <li>
                                    <Link to="/"><SvgIcon>
                                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                                    </SvgIcon></Link>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={7}>
                            <ul>
                                <li><Link to="/catalogue">Catalogue</Link></li>
                                <li><Link to="/contacts">Contacts</Link></li>
                            </ul>
                        </Grid>
                        <Grid item xs={2}>
                            <ul>
                                <li style={{
                                    float: "right",
                                    marginRight: "10%"
                                }}>
                                    {cart && <Link to="/cart">
                                        <ShoppingCartIcon/>
                                    </Link>}
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={1}>
                            <ul>
                                <li style={{
                                    float: "right",
                                    marginRight: "20%"
                                }}>
                                    {user && <Link to="/profile">
                                        <AccountCircleIcon/>
                                    </Link>}
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
};

export default UserHeader;
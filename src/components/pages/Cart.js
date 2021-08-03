import React, {useEffect, useState} from 'react';
import UserService from "../../services/UserService";
import axios from "axios";
import {ORDER_URL} from "../../utils/Constants";
import {Button, CardMedia} from "@material-ui/core";
import AuthService from "../../services/AuthService";
import CartService from "../../services/CartService";

const Cart = (props) => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        UserService.getUserIdByUsername().then(resp => {
            const url = ORDER_URL + 'orders/user-orders/' + resp.data
            console.log(url)
            axios.get(url)
                .then(resp => {
                    console.log(resp.data)
                    setCartItems(resp.data)
                })
                .catch(console.log);
        });
    }, [])

    return (
        <>
            <ul>
                {cartItems && cartItems.map((cartItem) =>
                    <div>{cartItem.title} : {cartItem.price}
                        <CardMedia
                            component="img"
                            height="150"
                            image={cartItem.imagePath}
                        />
                    </div>
                )}
            </ul>
            <Button variant="contained" color="primary"
                    onClick={() => {
                        CartService.buy();
                        props.history.push('/')
                    }}>
                Buy
            </Button>
        </>
    );
};

export default Cart;
import React from 'react';
import {Card, CardContent, CardHeader, CardMedia} from "@material-ui/core";

const ItemCard = (props) => {
    return (
        <>
            <Card style={{textAlign: 'center'}}>
                <CardHeader title={props.title}/>
                <CardMedia
                    component="img"
                    height="150"
                    image={"https://img.fozzyshop.com.ua/197899-large_default/batonchik-snickers-s-arakhisom-v-molochnom-shokolade.jpg"}
                />
                <CardContent>{props.price}</CardContent>
            </Card>
        </>
    );
};

export default ItemCard;
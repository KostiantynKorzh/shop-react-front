import React from 'react';
import {Card, CardContent, CardHeader} from "@material-ui/core";

const ItemCard = (props) => {
    return (
        <>
            <Card style={{textAlign: 'center'}}>
                <CardHeader title={props.title}/>
                <CardContent>{props.price}</CardContent>
            </Card>
        </>
    );
};

export default ItemCard;
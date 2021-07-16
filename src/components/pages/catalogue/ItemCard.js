import React from 'react';
import {Card, CardContent, CardHeader, CardMedia} from "@material-ui/core";

const ItemCard = (props) => {

    const item = props.item;

    return (
        <>
            <Card style={{textAlign: 'center'}}
                  onClick={() => props.history.push('/catalogue/' + item.id)}
            >
                <CardHeader title={item.title}/>
                <CardMedia
                    component="img"
                    height="150"
                    image={item.imagePath}
                />
                <CardContent>{item.price}</CardContent>
            </Card>
        </>
    );
};

export default ItemCard;
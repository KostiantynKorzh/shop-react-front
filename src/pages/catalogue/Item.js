import React from 'react';

const Item = (props) => {
    return (
        <>
            Item with id: {props.match.params.id}
        </>
    );
};

export default Item;
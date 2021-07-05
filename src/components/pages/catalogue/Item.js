import React from 'react';
import UserDefaultLayout from "../layouts/UserDefaultLayout";

const Item = (props) => {
    return (
        <>
            <UserDefaultLayout>
                Item with id: {props.match.params.id}
            </UserDefaultLayout>
        </>
    );
};

export default Item;
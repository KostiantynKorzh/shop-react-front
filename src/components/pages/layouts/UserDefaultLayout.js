import React from 'react';
import UserHeader from "../../common/headers/UserHeader";

const UserDefaultLayout = ({children}) => {
    return (
        <>
            <UserHeader/>
            {children}
        </>
    );
};

export default UserDefaultLayout;
import React from 'react';
import UserHeader from "../../components/common/headers/UserHeader";

const UserDefaultLayout = ({children}) => {
    return (
        <>
            <UserHeader/>
            {children}
        </>
    );
};

export default UserDefaultLayout;
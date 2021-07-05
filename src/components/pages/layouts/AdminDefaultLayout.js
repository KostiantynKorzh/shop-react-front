import React from 'react';
import AdminHeader from "../../common/headers/AdminHeader";

const AdminDefaultLayout = ({children}) => {
    return (
        <>
            <AdminHeader/>
            {children}
        </>
    );
};

export default AdminDefaultLayout;
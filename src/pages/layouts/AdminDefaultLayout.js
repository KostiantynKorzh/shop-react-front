import React from 'react';
import AdminHeader from "../../components/common/headers/AdminHeader";

const AdminDefaultLayout = ({children}) => {
    return (
        <>
            <AdminHeader/>
            {children}
        </>
    );
};

export default AdminDefaultLayout;
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import AdminDefaultLayout from "../../layouts/AdminDefaultLayout";
import GenericTable from "../common/GenericTable";
import AdminUserService from "../../../../services/admin/AdminUserService";

const AdminUsers = () => {
    const users = useSelector(state => state.adminUserReducer.adminUsers);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(AdminUserService.getAllUsers());
    }, [dispatch])

    const columns = [
        {id: 'id', label: 'ID', maxWidth: 30},
        {id: 'username', label: 'Username', maxWidth: 100},
        {id: 'email', label: 'Email', maxWidth: 70},
    ];

    return (
        <>
            <AdminDefaultLayout>
                <GenericTable columns={columns} data={users} deleteObjectFunc={AdminUserService.deleteUser}
                              type={"USERS"}/>
            </AdminDefaultLayout>
        </>
    );
};

export default AdminUsers;
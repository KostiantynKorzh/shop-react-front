import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import AdminService from "../../../../services/AdminService";
import AdminDefaultLayout from "../../layouts/AdminDefaultLayout";
import GenericTable from "../common/GenericTable";

const AdminUsers = () => {
    const users = useSelector(state => state.userReducer.users);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(AdminService.getAllUsers());
    }, [dispatch])


    const columns = [
        {id: 'pk', label: 'ID', maxWidth: 30},
        {id: 'username', label: 'Username', maxWidth: 100},
        {id: 'email', label: 'Email', maxWidth: 70},
    ];

    return (
        <>
            <AdminDefaultLayout>
                <GenericTable columns={columns} data={users} deleteObjectFunc={AdminService.deleteUser} type={"USERS"}/>
            </AdminDefaultLayout>
        </>
    );
};

export default AdminUsers;
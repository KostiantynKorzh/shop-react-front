import React, {useEffect} from 'react';
import AdminDefaultLayout from "../../layouts/AdminDefaultLayout";
import {useDispatch, useSelector} from "react-redux";
import AdminService from "../../../../services/AdminService";
import GenericTable from "../common/GenericTable";
import {useCollectionFromStore} from "../../../../utils/hooks/useCollectionFromStore";

const AdminCatalogue = () => {

    const adminItems = useSelector(state => state.adminItemReducer.adminItems);

    const dispatch = useDispatch();

    useCollectionFromStore(adminItems, AdminService.getAllItems());


    const columns = [
        {id: 'id', label: 'ID', maxWidth: 30},
        {id: 'title', label: 'Title', maxWidth: 100},
        {id: 'price', label: 'Price', maxWidth: 70},
        {id: 'imagePath', label: 'Image path', maxWidth: 300},
        {id: 'createdAt', label: 'Created at', maxWidth: 150},
        {id: 'updatedAt', label: 'Updated at', maxWidth: 100},
    ];

    return (
        <>
            <AdminDefaultLayout>
                <GenericTable columns={columns} data={adminItems} deleteObjectFunc={dispatch(AdminService.deleteItem)}
                              type={"ITEMS"}/>
            </AdminDefaultLayout>
        </>
    );
};

export default AdminCatalogue;
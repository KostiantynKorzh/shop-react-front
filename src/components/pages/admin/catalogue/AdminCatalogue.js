import React, {useEffect} from 'react';
import AdminDefaultLayout from "../../layouts/AdminDefaultLayout";
import {useDispatch, useSelector} from "react-redux";
import AdminService from "../../../../services/AdminService";
import GenericTable from "../common/GenericTable";

const AdminCatalogue = () => {

    const items = useSelector(state => state.itemReducer.items);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(AdminService.getAllItems());
    }, [dispatch])


    const columns = [
        {id: 'pk', label: 'ID', maxWidth: 30},
        {id: 'title', label: 'Title', maxWidth: 100},
        {id: 'price', label: 'Price', maxWidth: 70},
        {id: 'image_path', label: 'Image path', maxWidth: 300},
        {id: 'created_at', label: 'Created at', maxWidth: 150},
        {id: 'updated_at', label: 'Updated at', maxWidth: 100},
        // {id: 'edit', label: 'Edit', minWidth: 100},
        // {id: 'delete', label: 'Delete', minWidth: 100},
    ];

    return (
        <>
            <AdminDefaultLayout>
                <GenericTable columns={columns} data={items} deleteObjectFunc={dispatch(AdminService.deleteItem)} type={"ITEMS"}/>
            </AdminDefaultLayout>
        </>
    );
};

export default AdminCatalogue;
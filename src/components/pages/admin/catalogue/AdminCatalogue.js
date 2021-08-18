import React from 'react';
import AdminDefaultLayout from "../../layouts/AdminDefaultLayout";
import {useDispatch, useSelector} from "react-redux";
import GenericTable from "../common/GenericTable";
import {useCollectionFromStore} from "../../../../utils/hooks/useCollectionFromStore";
import AdminCatalogueService from "../../../../services/admin/AdminCatalogueService";

const AdminCatalogue = () => {

    const adminItems = useSelector(state => state.adminItemReducer.adminItems);

    const dispatch = useDispatch();

    useCollectionFromStore(adminItems, AdminCatalogueService.getAllItems());


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
                <GenericTable columns={columns} data={adminItems} deleteObjectFunc={dispatch(AdminCatalogueService.deleteItem)}
                              type={"ITEMS"}/>
            </AdminDefaultLayout>
        </>
    );
};

export default AdminCatalogue;
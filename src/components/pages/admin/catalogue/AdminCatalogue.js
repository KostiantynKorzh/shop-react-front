import React, {useEffect, useState} from 'react';
import AdminDefaultLayout from "../../layouts/AdminDefaultLayout";
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import ItemForm from "./ItemForm";
import AdminService from "../../../../services/AdminService";

const AdminCatalogue = () => {

    const items = useSelector(state => state.itemReducer.items);

    const dispatch = useDispatch();

    const [openCreate, setOpenCreate] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);

    const [currentItem, setCurrentItem] = useState(null);

    useEffect(() => {
        dispatch(AdminService.getAllItems());
    }, [dispatch])


    const columns = [
        {id: 'pk', label: 'ID', minWidth: 70},
        {id: 'title', label: 'Title', minWidth: 100},
        {id: 'price', label: 'Price', minWidth: 70},
        {id: 'image_path', label: 'Image path', maxWidth: 100},
        {id: 'created_at', label: 'Created at', minWidth: 100},
        {id: 'updated_at', label: 'Updated at', minWidth: 100},
        // {id: 'edit', label: 'Edit', minWidth: 100},
        // {id: 'delete', label: 'Delete', minWidth: 100},
    ];

    return (
        <>
            <AdminDefaultLayout>
                <Button
                    variant={"contained"}
                    color={"primary"}
                    style={{backgroundColor: "green"}}
                    onClick={() => setOpenCreate(true)}
                >
                    Add new item
                </Button>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        // align={column.align}
                                        style={{
                                            // minWidth: column.minWidth,
                                            width: 70
                                        }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items && items.map((item) => {
                                return (
                                    <TableRow hover role="checkbox"
                                        // tabIndex={-1}
                                              key={item.pk}>
                                        {columns.map((column) => {
                                            let value = '';
                                            if (column.id == 'pk') {
                                                value = item[column.id];
                                            } else {
                                                value = item.fields[column.id];
                                            }
                                            return (
                                                <TableCell key={column.id}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell key={"edit"}>
                                            <Button
                                                variant={"contained"}
                                                color={"primary"}
                                                onClick={() => {
                                                    setCurrentItem(item);
                                                    setOpenUpdate(true);
                                                }}
                                            >
                                                Edit
                                            </Button>
                                        </TableCell>
                                        <TableCell key={"delete"}>
                                            <Button
                                                variant={"contained"}
                                                color={"secondary"}
                                                onClick={() => AdminService.deleteItem(item.pk)}
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </AdminDefaultLayout>

            <ItemForm open={openCreate} setOpen={setOpenCreate} action={'CREATE'}/>
            <ItemForm open={openUpdate} setOpen={setOpenUpdate} action={'UPDATE'} item={currentItem}/>
        </>
    );
};

export default AdminCatalogue;
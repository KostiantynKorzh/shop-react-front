import React, {useEffect, useState} from 'react';
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import ItemForm from "../catalogue/ItemForm";
import UserForm from "../users/UserForm";

const GenericTable = ({columns, data, deleteObjectFunc, type}) => {

    const [openCreate, setOpenCreate] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);

    const [currentObject, setCurrentObject] = useState(null);

    return (
        <>
            <Button
                variant={"contained"}
                color={"primary"}
                style={{backgroundColor: "green"}}
                onClick={() => setOpenCreate(true)}
            >
                Add new
            </Button>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data && data.map((data) => {
                            return (
                                <TableRow hover role="checkbox"
                                          key={data.id}
                                >
                                    {columns.map((column) => {
                                        const value = data[column.id];
                                        return (
                                            <TableCell key={column.id}
                                                // style={{maxWidth: "200px"}}
                                                // style={{maxWidth: column.maxWidth}}
                                                       style={{
                                                           // whiteSpace: "nowrap",
                                                           textOverflow: "ellipsis",
                                                           maxWidth: column.maxWidth,
                                                           // display: "block",
                                                           overflow: "hidden"
                                                       }}
                                            >
                                                {value}
                                            </TableCell>
                                        );
                                    })}
                                    <TableCell key={"edit"}>
                                        <Button
                                            variant={"contained"}
                                            color={"primary"}
                                            onClick={() => {
                                                setCurrentObject(data);
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
                                            onClick={() => deleteObjectFunc(data.id)}
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

            {type === 'USERS' && (
                <>
                    <UserForm open={openCreate} setOpen={setOpenCreate} action={'CREATE'}/>
                    <UserForm open={openUpdate} setOpen={setOpenUpdate} action={'UPDATE'} user={currentObject}/>
                </>
            )}
            {type === 'ITEMS' && (
                <>
                    <ItemForm open={openCreate} setOpen={setOpenCreate} action={'CREATE'}/>
                    <ItemForm open={openUpdate} setOpen={setOpenUpdate} action={'UPDATE'} item={currentObject}/>
                </>
            )}
        </>
    );
};

export default GenericTable;
import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import AdminCatalogue from "./components/pages/admin/catalogue/AdminCatalogue";
import Catalogue from "./components/pages/catalogue/Catalogue";
import Contacts from "./components/pages/contacts/Contacts";
import Profile from "./components/pages/Profile";
import Item from "./components/pages/catalogue/Item";
import Login from "./components/pages/auth/Login";
import Signup from "./components/pages/auth/Signup";
import AdminUsers from "./components/pages/admin/users/AdminUsers";

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={["/", "/home"]} component={Home}/>
                    <Route exact path={"/login"} component={Login}/>
                    <Route exact path={"/signup"} component={Signup}/>
                    <Route exact path={"/admin"} component={AdminCatalogue}/>
                    <Route exact path={"/admin/catalogue"} component={AdminCatalogue}/>
                    <Route exact path={"/admin/users"} component={AdminUsers}/>
                    <Route exact path={"/catalogue"} component={Catalogue}/>
                    <Route exact path={"/catalogue/:id"} component={Item}/>
                    <Route exact path={"/contacts"} component={Contacts}/>
                    <Route exact path={"/profile"} component={Profile}/>
                </Switch>
            </BrowserRouter>
        </>
    );
};
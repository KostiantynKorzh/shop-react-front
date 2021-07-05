import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Admin from "./components/pages/Admin";
import Catalogue from "./components/pages/catalogue/Catalogue";
import Contacts from "./components/pages/Contacts";
import Profile from "./components/pages/Profile";
import Item from "./components/pages/catalogue/Item";

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={["/", "/home"]} component={Home}/>
                    <Route exact path={"/admin"} component={Admin}/>
                    <Route exact path={"/catalogue"} component={Catalogue}/>
                    <Route exact path={"/catalogue/:id"} component={Item}/>
                    <Route exact path={"/contacts"} component={Contacts}/>
                    <Route exact path={"/profile"} component={Profile}/>
                </Switch>
            </BrowserRouter>
        </>
    );
};
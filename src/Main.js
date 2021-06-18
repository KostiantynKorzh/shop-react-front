import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Admin} from "./pages/Admin";
import {Catalogue} from "./pages/Catalogue";
import {Contacts} from "./pages/Contacts";
import {Profile} from "./pages/Profile";

export const Main = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={["/", "/home"]} component={Home}/>
                    <Route exact path={"/admin"} component={Admin}/>
                    <Route exact path={"/catalogue"} component={Catalogue}/>
                    <Route exact path={"/contacts"} component={Contacts}/>
                    <Route exact path={"/profile"} component={Profile}/>
                </Switch>
            </BrowserRouter>
        </>
    );
};
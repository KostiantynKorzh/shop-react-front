import React from 'react';
import {Link} from "react-router-dom";
import * as Constants from "../../utils/Constants"
import UserDefaultLayout from "./layouts/UserDefaultLayout";

const Home = () => {
    return (
        <>
            <UserDefaultLayout>
                Home
                <div>
                    {Constants.CATALOGUE_URL}
                </div>
                <div>
                    <Link to={"/admin"}>Admin</Link>
                </div>
                <div>
                    <Link to={"/catalogue"}>Catalogue</Link>
                </div>
                <div>
                    <Link to={"/profile"}>Profile</Link>
                </div>
                <div>
                    <Link to={"/login"}>!Login!</Link>
                </div>
                <div>
                    <Link to={"/signup"}>Signup</Link>
                </div>
            </UserDefaultLayout>
        </>
    );
};

export default Home;
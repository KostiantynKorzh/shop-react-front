import React, {useEffect, useState} from 'react';
import UserHeader from "../../common/headers/UserHeader";
import LoadingSpinner from "../../common/LoadingSpinner";
import ErrorPage from "../../common/ErrorPage";

const UserDefaultLayout = ({children, loading}) => {

    // const [isLoading, setIsLoading] = useState(false);
    // const [isError, setIsError] = useState(null);
    //
    // useEffect(() => {
    //     setIsLoading(loading);
    //     setIsError(error);
    //     console.log("UPDATING...")
    // }, [error, loading]);

    return (
        <>
            <UserHeader/>
            {children}
        </>
    );
}

export default UserDefaultLayout;
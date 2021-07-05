import React from 'react';
import FeedbackForm from "../contacts/FeedbackForm";
import UserDefaultLayout from "./layouts/UserDefaultLayout";

const Contacts = () => {

    return (
        <>
            <UserDefaultLayout>
                <FeedbackForm/>
            </UserDefaultLayout>
        </>
    );
};

export default Contacts;
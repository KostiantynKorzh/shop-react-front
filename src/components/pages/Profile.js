import React, {useState} from 'react';
import UserDefaultLayout from "./layouts/UserDefaultLayout";
import {useUserAuthData} from "../../utils/hooks/useUserAuthData";

const Profile = () => {

    const user = useUserAuthData();

    const [users, setUsers] = useState([]);
    // const [user, setUser] = useState({});


    // const fetchUsers = () => {
    //     UserService.getAllUsers()
    //         .then(resp => {
    //             console.log(resp.data)
    //             setUsers(resp.data)
    //         })
    //         .catch(err => alert(err));
    // }
    //
    // const fetchUserById = (id) => {
    //     UserService.getUserById(id)
    //         .then(resp => setUser(resp.data))
    //         .catch(err => alert(err));
    // }
    //
    // useEffect(() => {
    //     fetchUsers();
    //     fetchUserById(1);
    // }, [])

    return (
        <>
            <UserDefaultLayout>
                User: {user && user.username}
                <ul>
                    {users.map((user) => <li>{user.username}</li>)}
                </ul>
            </UserDefaultLayout>
        </>
    );
};

export default Profile;


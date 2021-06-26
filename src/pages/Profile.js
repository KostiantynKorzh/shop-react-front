import React, {useState} from 'react';
import UserService from "../services/UserService";

const Profile = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});

    const fetchUsers = () => {
        UserService.getAllUsers()
            .then(resp => {
                console.log(resp.data)
                setUsers(resp.data)
            })
            .catch(err => alert(err));
    }

    const fetchUserById = (id) => {
        UserService.getUserById(id)
            .then(resp => setUser(resp.data))
            .catch(err => alert(err));
    }

    useState(() => {
        fetchUsers();
        fetchUserById(1);
    }, [])

    return (
        <>
            User: {user.username} with id {user.id}
            <ul>
                {users.map((user) => <li>{user.username}</li>)}
            </ul>
        </>
    );
};

export default Profile;


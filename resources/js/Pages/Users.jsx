import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Users(){

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = ()=>{
        setLoading(true);
        axios.get('/api/users').then((response)=>{

            setUsers(response.data.data)

            setLoading(false);

        }).catch(()=>{
            setLoading(false);
        })
    }

    const onDeleteClick = user => {
        if (!window.confirm("Are you sure you want to delete this user?")) {
            return
        }
        axios.delete(`/users/${user.id}`)
            .then(() => {
                //setNotification('User was successfully deleted')
                getUsers()
            })
    }


    return(
        <div>
           <h1>Users</h1>
            <Link className="btn-add"  to="/users/new">Add new</Link>

            <div className="card">

               { <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Create Date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="5" className="text-center">
                                Loading...
                            </td>
                        </tr>
                    ) : (
                        users.map(u => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>{u.created_at}</td>
                                <td>
                                    <Link className="btn-edit" to={`/users/${u.id}`}>Edit</Link>
                                    &nbsp;
                                    <button className="btn-delete" onClick={() => onDeleteClick(u)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>}

            </div>

        </div>
    )
}

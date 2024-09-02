import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function UserForm() {
    const navigate = useNavigate();
    let {id} = useParams();
    const [user, setUser] = useState({
        id: null,
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })


    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(false)

    if (id) {
        useEffect(() => {
            setLoading(true)
            axios.get(`/api/users/${id}`)
                .then(({data}) => {
                    setLoading(false)
                    setUser(data.data)
                })
                .catch(() => {
                    setLoading(false)
                })
        }, [])
    }

    const onSubmit = ev => {
        ev.preventDefault()
        if (user.id) {
            axios.put(`/api/users/${user.id}`, user)
                .then(() => {
                    navigate('/users')
                })
                .catch(err => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        setErrors(response.data.errors)
                    }
                })
        } else {
            axios.post('/api/users', user)
                .then(() => {
                    navigate('/users')
                })
                .catch(err => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        setErrors(response.data.errors)
                    }
                })
        }
    }

    return (
        <>
            {user.id && <h1>Update User: {user.name}</h1>}
            {!user.id && <h1>New User</h1>}
            <div className="card animated fadeInDown">
                {loading && (
                    <div className="text-center">
                        Loading...
                    </div>
                )}
                {!loading && (
                    <form onSubmit={onSubmit}>
                        <input value={user.name} onChange={ev => setUser({...user, name: ev.target.value})} placeholder="Name"/>
                        <input value={user.email} onChange={ev => setUser({...user, email: ev.target.value})} placeholder="Email"/>
                        <input type="password" onChange={ev => setUser({...user, password: ev.target.value})} placeholder="Password"/>
                        <input type="password" onChange={ev => setUser({...user, password_confirmation: ev.target.value})} placeholder="Password Confirmation"/>
                        <button className="btn">Save</button>
                    </form>
                )}
            </div>
        </>
    )
}

import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../../context/ContextProvider.jsx";
import {useEffect} from "react";

export default function DefaultLayout() {
    const {user, token, setUser, setToken} = useStateContext()

    if (!token) {
       return <Navigate to="/login"></Navigate>
    }

    const onLogout =  (ev) => {
        ev.preventDefault();
        axios.post('/api/logout').then(()=>{
            setUser({});
            setToken(null);
        });
    }

    //hook
    useEffect(() => {
        axios('/api/user').then(({data})=>{
            setUser(data);
        })
    }, []);

    return (
        <div id="defaultLayout">
         <aside>
             <Link to="/dashboard">Dashboard</Link>
             <Link to="/users">Users</Link>
         </aside>
            <div className="content">
                <header>
                    <div>Header</div>
                    <div>
                        {user.name} <a href="#" onClick={onLogout}>Logout</a>
                    </div>
                </header>
                <main>
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    )
}

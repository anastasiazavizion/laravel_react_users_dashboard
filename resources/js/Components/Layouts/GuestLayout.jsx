import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../../context/ContextProvider.jsx";

export default function GuestLayout() {

    const {token} = useStateContext()

    if (token) {
        return <Navigate to="/users"></Navigate>
    }

    return (
        <div>
            <div className="login-signup-form fadeInDown">
                <div className="form">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

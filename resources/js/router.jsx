import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Users from "./Pages/Users.jsx";
import NotFound from "./Pages/NotFound.jsx";
import DefaultLayout from "./Components/Layouts/DefaultLayout.jsx";
import GuestLayout from "./Components/Layouts/GuestLayout.jsx";
import Dashboard from "./Pages/Dashboard.jsx";

const router = createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/',
                element:<Navigate to="/users"/>
            },
            {
                path:'/users',
                element:<Users/>
            },
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
        ]
    },

    {
        path:'/',
        element:<GuestLayout/>,
        children:[
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<Signup/>
            },
        ]
    },

    {
        path:'*',
        element:<NotFound/>
    }
])

export default router;

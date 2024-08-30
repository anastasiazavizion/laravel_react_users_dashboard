import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import {ContextProvider} from "./context/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById('app')).render(
    <ContextProvider>
        <RouterProvider router={router}/>
    </ContextProvider>
);

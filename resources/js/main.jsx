import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";

ReactDOM.createRoot(document.getElementById('app')).render(<RouterProvider router={router}/>);

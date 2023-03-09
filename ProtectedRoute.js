import React from 'react'
import {Outlet,Navigate} from "react-router-dom";
import { Home } from './Home';
export const ProtectedRoute = () => {
    const auth = localStorage.getItem("loggedin");
    return auth ? <Outlet /> : <Navigate to={"/login"}/>
  
}

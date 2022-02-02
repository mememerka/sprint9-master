import { Alert, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext }  from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from '../../aplication/Provider';

const PrivateRoute = () => {
    const [currentUser] = useContext(AppContext);

    return (
        currentUser ? <Outlet/> : <Navigate to='/notLogged'/>
    );
};

export default PrivateRoute;  


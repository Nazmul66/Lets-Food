import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../AuthProvider/AuthProvider"
import Loader from '../../Loader';

const PrivateRoute = ({ children }) => {
    const { loading, userInfo } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if(loading){
     return <Loader></Loader>
    }

    if(userInfo){
       return children;
    }
      return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;
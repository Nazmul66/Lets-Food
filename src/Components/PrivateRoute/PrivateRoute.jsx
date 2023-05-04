import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../AuthProvider/AuthProvider"

const PrivateRoute = ({ children }) => {
    const { userInfo } = useContext(AuthContext);
    console.log("login")
    const location = useLocation();
    console.log(location)

    if(userInfo){
       return children;
    }
      return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;
import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/context/UserContext/UserContext';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(loading)
    if(loading){

        return <div className='mt-20 container flex justify-center items-center mx-auto'>Loading..................</div>
    }
    if(user && user.email){
        return children;
    }
    return (
        <Navigate to="/login" state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;
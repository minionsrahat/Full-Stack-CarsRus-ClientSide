import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase';

const PrivateRoute = ({children}) => {

    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();
    if(loading)
    {
        return <><div>Loading</div></>
    }
  
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  }


export default PrivateRoute;
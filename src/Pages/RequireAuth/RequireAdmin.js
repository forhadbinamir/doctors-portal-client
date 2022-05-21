import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import auth from '../Firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const [admin, loadingAdmin] = useAdmin(user)
    const location = useLocation()

    if (loading || loadingAdmin) {
        return <Loading></Loading>
    }
    if (!user || !admin) {
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default RequireAdmin;
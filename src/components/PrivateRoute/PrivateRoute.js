import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Spinners from '../Shared/Spinners/Spinners';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading} = useAuth();
    if (loading) return <Spinners></Spinners>;
    return (
        <Route 
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;
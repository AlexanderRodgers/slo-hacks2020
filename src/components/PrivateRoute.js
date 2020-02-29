import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
   const { currentUser } = useContext(AuthContext);
   return (
      <Route
         {...rest}
         render={routeProps => !!currentUser ? (
            <RouteComponent {...routeProps}></RouteComponent>
         ) : (<Redirect to="login"></Redirect>)}
      >
      </Route>
   );
}

export default PrivateRoute;
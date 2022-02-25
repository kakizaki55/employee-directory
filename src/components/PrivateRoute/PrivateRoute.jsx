import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function PrivateRoute({ children, ...props }) {
  const { user } = useUser();

  return (
    <Route
      {...props}
      render={() => (user.email ? children : <Redirect to="login" />)}
    />
  );
}

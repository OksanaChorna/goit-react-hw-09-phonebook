import React, { Suspense, lazy, useEffect } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import AppBarComp from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PablicRoute from './components/PublicRoute';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser);
  }, [dispatch]);

  return (
    <>
      <AppBarComp />
      <Suspense fallback={<p>Wait...</p>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomePage />
          </PublicRoute>
          <PablicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterPage />
          </PablicRoute>
          <PablicRoute path="/login" restricted redirectTo="/contacts">
            <LoginPage />
          </PablicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsPage />
          </PrivateRoute>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

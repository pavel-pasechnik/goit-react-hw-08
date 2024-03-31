import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from '../Routes/PrivateRoute.jsx';
import { RestrictedRoute } from '../Routes/RestrictedRoute.jsx';
import { Toaster } from 'react-hot-toast';
import { refreshUser } from '../../redux/auth/operations.js';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';

import HomePage from '../../pages/HomePage/HomePage.jsx';
import Layout from '../Layout/Layout.jsx';
import LoginPage from '../../pages/LoginPage/LoginPage.jsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';
import RegisterPage from '../../pages/RegisterPage/RegisterPage.jsx';

const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage.jsx'));

// import css from './App.module.css';

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Toaster position='top-center' />
      <Layout>
        <Suspense fallback={<div>LOADING PAGE...</div>}>
          {isRefreshing ? (
            <b>Please wait...</b>
          ) : (
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route
                path='/contacts'
                element={<PrivateRoute component={<ContactsPage />} redirectTo='/login' />}
              />
              <Route
                path='/register'
                element={<RestrictedRoute component={<RegisterPage />} redirectTo='/contacts' />}
              />
              <Route
                path='/login'
                element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />}
              />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          )}
        </Suspense>
      </Layout>
    </>
  );
}

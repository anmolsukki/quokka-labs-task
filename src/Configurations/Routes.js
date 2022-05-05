import React, { Fragment } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';

const withLocation = Component => props => {
    const location = useLocation();
    return <Component {...props} location={location} />;
};

const AppRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route path="*" element={<div className='text-center'><p>There's nothing here: 404!</p><Link to="/">Go to Home</Link></div>} />
      </Routes>
    </Fragment>
  );
};

export default withLocation(AppRoutes);

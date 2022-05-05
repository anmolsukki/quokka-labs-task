import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './Configurations/Routes';
import 'react-toastify/dist/ReactToastify.css'; 
import './App.css';

const App = () => {
  return (
    <Fragment>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnVisibilityChange draggable pauseOnHover />
      <Router>
        <Routes />
      </Router>
    </Fragment>
  );
}

export default App;

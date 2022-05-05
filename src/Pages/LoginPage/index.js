import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import validator from "validator";

const LoginPage = () => {
  const navigate = useNavigate()

  const [state, setState] = useState({email: "", password: ""})

  const submitHandler = () => {
    if(!validator.isEmail(state.email, { blacklisted_chars: '/+-' })) toast.error('Please enter valid email');
    else if(state.password.length < 8) toast.error('Password should be min 8 character.');
    else {
      if((state.email === "task@gmail.com") && (state.password === "12345678")) {
        localStorage.setItem("validUser", JSON.stringify({email: "task@gmail.com", password: "12345678"}))
        toast.success("Succesfully Login.")
        navigate("/")
      } else toast.error("User is not registered!");
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2"></div>
        <div className="col-lg-4 col-md-6 login-box">
          <div className="col-lg-12 login-key">
            <i className="fa fa-key" aria-hidden="true"></i>
          </div>
          <div className="col-lg-12 login-title">Quokka Labs LLP</div>
          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <div className="form-group">
                <label className="fw-bold ps-2">E-Mail</label>
                <input type="email" className="form-control" name="email" placeholder='Enter email*' maxLength={26} onChange={(e) => setState({...state, email: e.target.value})} />
              </div>
              <div className="form-group pt-4">
                <label className="fw-bold ps-2">Password</label>
                <input type="password" className="form-control" name="password" placeholder='Enter password*' maxLength={16} onChange={(e) => setState({...state, password: e.target.value})} />
              </div>
              <div className="col-lg-12 loginbttm pt-5">
                <div className="col-lg-6 login-btm login-button">
                  <button type="submit" className="btn btn-outline-primary" onClick={() => submitHandler()}>LOGIN</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
function SignUpForm() {

  const navigate = useNavigate();

  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    const { name, email, password } = state;
    let url = process.env.REACT_APP_serverURL + 'api/auth/register';
    const response = await axios.post(url,{username: name, useremail: email, userpassword: password})
    
    
    if(response.data.message=== "Account Created") {
      navigate("\main");
    } else {
      alert("Error,Try Again")
    }


    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit} className="auth-form">
        <h1 className="auth-h1">Create Account</h1>
        <div className="social-container">
          <a href="#" className="auth-a">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="auth-a">
            <i className="fab fa-google" />
          </a>
          <a href="#" className="auth-a">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span className="auth-span">or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
          className="auth-input"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
          className="auth-input"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
          className="auth-input"
        />
        <button className="auth-button1">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;

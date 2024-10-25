import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignInForm() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
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
  const handleOnSubmit = async(evt) => {
    evt.preventDefault(); 

    const { email, password } = state;
    
    let url = process.env.REACT_APP_serverURL + 'api/auth/login';

    const response = await axios.post(url,{useremail:email,userpassword:password})

    if(response.data.message === "success") {
      navigate('\main');
    } else{
      alert("username or userpassword is wrong");
    }

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit} className="auth-form">
        <h1 className="auth-h1">Sign in</h1>
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
        <span className="auth-span">or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
          className="auth-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          className="auth-input"
        />
        <a href="#" className="auth-a">Forgot your password?</a>
        <button className="auth-button1">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;

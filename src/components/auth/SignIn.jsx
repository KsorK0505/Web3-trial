import React from "react";
function SignInForm() {
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

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

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

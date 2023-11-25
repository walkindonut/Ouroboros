import React from 'react';
import './Signin.css'; // Link to your CSS file

function Signin() {
  return (
    <div className="login">
      <a href='/'><img className="logo" src="/Logo/1.png" /></a> 

      <h1>Log In</h1>
      <input type="email" name="email" placeholder="Email" id="" />
      <br />
      <input type="password" name="password" placeholder="Password" id="" />
      <button className="loginButton">Log In Account</button>
      <a href="/signup"><button className="CreateButton">Create an Account</button></a>
    </div>
  );
}

export default Signin;

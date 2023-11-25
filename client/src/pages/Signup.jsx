import React from 'react'
import './Signup.css'; // Link to your CSS file

function Signup() {
  return (
    <div className="SignupPage">
      <a href='/'><img className="logo" src="/Logo/1.png" /></a> 

      <h1>Sign Up</h1>
      <input type="text" name="fullname" placeholder="Full Name" id="" />
      <input type="number" name="number" placeholder="Phone number" id="" />
      <input type="email" name="email" placeholder="Email" id="" />
      <br />
      <input type="password" name="password" placeholder="Password" id="" />
      <button className="loginButton">Create an Account</button>
    </div>
  );
}


export default Signup
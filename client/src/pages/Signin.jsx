import React from 'react'

function Signin() {
  return (
    <div className="login">
          <h1>Log In</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id=""
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            id=""
          />
          <button className="loginButton">
            Log In Account
          </button>
        </div>
  )
}

export default Signin
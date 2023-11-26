import React from 'react';
//import './Signin.css';
// Link to your CSS file
import './Login.css';//different css
function Signin() {
  return (
    <div className="yourbigdiv">
      <div className="login-signup" >
     <div id="background">
    
     <div id="center">
    <form>
    <a id="logo" href='/'><img className="logo" src="/Logo/1.png" width="150" height="150"/></a> 
      <h3 id="logintext">Log In</h3>
        <div className="input">
      <label className="username" id="usernametext">Username:</label>
    
      <input type="text" id="username" name="username"/>
        </div>
    
    
    
        <div className="input">
      <label className="password" id="">Password:</label>
      <input type="text" id="password" name="password"/> 
      </div>
    <div id="buttons">
        <input className="button" id="signinbutton" type="button" value="Sign in"/>
    
      
        <a href="/signup"><input className="button" id="signupbutton" type="button" value="Sign up"/></a>
      </div>
    
    
    
    
      </form>
    
     <svg xmlns="http://www.w3.org/2000/svg" width="600" height="500" viewBox="0 0 713 892" fill="none">
      <g filter="url(#filter0_i_2_34)">
        <path d="M0 137.124L348.995 0L713 137.124V743.102L348.995 892L0 743.102V137.124Z" fill="#DBE8CF"/>
      </g>
      <defs>
        <filter id="filter0_i_2_34" x="0" y="0" width="713" height="896" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2_34"/>
        </filter>
      </defs>
    </svg>
    </div>
     </div>
     </div>
     </div>
  );
}

export default Signin;

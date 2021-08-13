import React from 'react';
import './navs.css';
import Logo from '../images/logo.jpeg';
import { NavLink } from 'react-router-dom';



const Navbar = ()=>
{
  

var naving=localStorage.getItem('jw');


  const RenderMenu=()=>
  {
  
    if(naving==0){
      
      return(
        <>
        <li class="nav-item">
        <NavLink class="nav-link" to="/" >Home</NavLink>
      </li>
        <li class="nav-item">
        <a class="nav-link" href="../account/home.js">Account</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="../coursevideos/coursevideos.js">Videos</a>
      </li>
      <li class="nav-item" >
        <a class="nav-link disabled" href="../courses/payment.js" disabled>Buy</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../logout/logout.js">Log Out</a>
      </li>
        </>
  
      )
    }
  
else{
  return(
    <>
    <li class="nav-item">
        <NavLink class="nav-link" to="/" >Home</NavLink>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../login/signup.js">Sign up</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../signin/signin.js">Log In</a>
      </li>
    </>
  )

  }
}
  return(
    <>
    
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
<h1 className="logop">DT</h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul class="navbar-nav">
    <RenderMenu/>
    </ul>
  </div>
</nav>
</>
  )


}
export default Navbar
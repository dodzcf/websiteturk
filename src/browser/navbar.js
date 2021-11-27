import React from 'react';
import './navs.css';
import { NavLink,Link } from 'react-router-dom';



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
        <Link class="nav-link" to="/account">Account</Link>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="../coursevideos/coursevideos.js">Videos</a>
      </li>
      <li class="nav-item" >
        <a class="nav-link disabled" href="../courses/payment.js" disabled>Buy</a>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/logout">Log Out</Link>
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
        <Link class="nav-link" to="/signup">Sign up</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/signin">Log In</Link>
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

export default Navbar;
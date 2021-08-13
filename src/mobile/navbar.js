import React from 'react'
import './nav.css'
const Navbar = ()=>
{
  
  return(
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  {/* <img src="./images/logo.jpeg" class="abc"></img> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#" >Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item" >
        <a class="nav-link" href="#" >Social Media</a>
      </li>
      <li class="nav-item" disabled>
        <a class="nav-link" href="#" >Courses</a>
      </li>
         
    </ul>
  </div>
</nav>
  )
}

export default Navbar
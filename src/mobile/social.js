import React from 'react'
import './social.css'
const Social = ()=>
{
  return(
      
    <div id="footer">
    <div class="container">
    <div className="container">
    <a class="nav-link" href="https://www.facebook.com/profile.php?id=100068854722313">
    <div class="btn fb-btn">
        <i class="fa fa-facebook" aria-hidden="true" id="fb"></i>
    </div></a>
    <a class="nav-link" href="https://www.instagram.com/danny_turktutkusu/">
    <div class="btn btnn ig-btn">
        <i class="fa fa-instagram" aria-hidden="true" id="ig" href=""></i>
        </div></a>
        <a class="nav-link" href="https://twitter.com/turktutkusu">
    <div class="btn btnn tw-btn">
        <i class="fa fa-twitter" aria-hidden="true" id="tw" ></i>
    </div></a>
    <a class="nav-link"
    href="https://wa.me/+923028861700"
        target="_blank"
        rel="noopener noreferrer">
    <div class="btn btnn wa-btn">
        <i class="fa fa-whatsapp" aria-hidden="true" id="wa"></i>
    </div></a>
    </div>
    <br></br>
    <br></br>
</div>
</div>
  )
}

export default Social
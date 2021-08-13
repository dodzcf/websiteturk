import React,{useState} from 'react'
import Turkish from './videos/turkish';
import Urdu from './videos/urdu';
import English from './videos/english';
import './video.css'
const Video = ()=>
{



  return(
    <>
        <div class=" container bodyy p-3 mb-2 bg-primary text-white"><h2 class="d-flex justify-content-center">Introductory Videos</h2></div>

    <div class="container bodyy">
    <Urdu/>

    </div>
    <br></br>
    <div class="container bodyy">
    

    <Turkish/>
    </div>
    <br></br>
    <div class="container bodyy">
    <English/>
    </div>
    </>
  
  )
  
}

export default Video
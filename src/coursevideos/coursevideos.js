import React,{useEffect} from 'react'
import './coursevideos.css'
const CourseVideo = ()=>
{
  
  const data = async ()=>
  {
    try
    {

    const res = await fetch('/nav',
    {
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      },
      credentials:"include"
    });
    if(res.status===401)
    {
      window.location.href="/signin/signin.";
    }
  }
  catch(error)
  {
    window.location.href="/signin/signin.";
  }
  }
  useEffect(()=>{
    data();
  },[])
  return(
    <>
<div class="container">
        
<div class="wrapper ">
  <div class="main-div main-div1">
    <h1 className="heading1">Videos</h1>
  </div>
</div>
</div>
<br></br>
<br></br>
    <div>
        {/* <div className="container videocolor"> */}
        <div class="jumbotron videocolor d-flex justify-content-center">

          <h2><u>Welcome Video</u></h2>



        </div>


        </div>
    {/* </div> */}
    </>
)
}

export default CourseVideo
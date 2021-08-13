import React, {useState,useEffect} from 'react';
import './payment.css';

const Payment=()=>
{

    const paym = async ()=>
    {
      
  
      const res = await fetch('/pay',
      {
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        },
        credentials:"include"
      });
      const userinfo=await res.json();
      
  
      
      
      
    }

    useEffect(()=>{
        paym();
      },[])


    return (
        <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="container text-dark">
        <div class="roww">
        <div class="jumbotron coll"><h2 class="d-flex justify-content-center"><b><u>Trial</u></b></h2>
        <p class="d-flex justify-content-center"><b>Basic Contents on how you can learn turkish yourself.</b></p>
        <br></br>
        <div className='d-flex justify-content-center'><button className=" btn-success" disabled>Rs.100 /month</button></div>
        </div>
        <div class="jumbotron coll"><h2 class="d-flex justify-content-center"><b><u>Premium</u></b></h2>
        <p class="d-flex justify-content-center"><b>Get Premium and learn more efficiently with course guidelines.</b></p>
        <br></br>
        <div className='d-flex justify-content-center'><button className=" btn-success" disabled>Rs.500 /month</button></div>
        </div>
        <div class=" jumbotron coll"><h2 class="d-flex justify-content-center"><b><u>Premium +</u></b></h2>
        <p class="d-flex justify-content-center"><b>Get Premium + and learn turkish with the help of podcasts,TV shows and story books.</b></p>
        <div className='d-flex justify-content-center'><button className=" btn-success" disabled>Rs.2000 /month</button></div>
        <br></br>
        <br></br>
        </div>
</div>
    </div>
</>
)}

export default Payment
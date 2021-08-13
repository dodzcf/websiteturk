import React,{useState,useEffect} from 'react'
import './homeacc.css'
const Home = ()=>
{
  const [userName,setUserName]=useState();
  const [userfname,setfname]=useState();
  const [userlname,setlname]=useState();
  const [userEmail,setemail]=useState();
  const [userpaid,setpaid]=useState();

  const data = async ()=>
  {
    
    try{
    const res = await fetch('/nav',
    {
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      },
      credentials:"include"
    });
    const userinfo=await res.json();
    
    setUserName(userinfo.username);
    setfname(userinfo.firstname);
    setlname(userinfo.lastname);
    setemail(userinfo.email);

    if(userinfo.isPaid==0)
    {
      setpaid("Basic");
    }
    if(userinfo.isPaid==100)
    {
      setpaid("Trial");
    }
    if(userinfo.isPaid==500)
    {
      setpaid("Premium");
    }
    if(userinfo.isPaid==1000)
    {
      setpaid("Premiun +");
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
            <h1 className="heading1">{userfname}'s</h1>
          </div>
          <div class="main-div main-div3">
            <h1 className="heading1">Türk tutkusu</h1>
          </div>
        </div>
        </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div class=" jumbotron  text-white flag">
    <br></br>
    <br></br>
    
    <div class="container profilej acc">
    <div class="jumbtron">
    <h2 class="d-flex justify-content-center  ">Account Details</h2>
    <br></br>
    <br></br>
            <div class="row">
      		<div class="col-md-6">
          <br></br>
          <br></br>
            	<img className="profilepic" src="https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png" alt="inn_logo"/>
              
          </div>
          <hr class="verticalhrr"/>
          &nbsp; 
          &nbsp; 
          &nbsp; 
        	<div class="col-md-12">
          <br></br>
          <br></br>
              <p><b>User Name:&nbsp; {userName} </b></p>
              <p><b>Full Name:&nbsp; {userfname}&nbsp;{userlname}</b> </p>
              <p><b>Email:&nbsp;{userEmail} </b></p>
              <p><b>Membership: {userpaid} </b></p>
        	</div>
      	</div>
        <br></br>
    <br></br>
    <br></br>
    <br></br>










    </div>  
    </div>


    <br></br>
    <br></br>
    <br></br>
    <br></br>



        
        
        
        </div>
        <br></br>
        <br></br>
        <br></br>
    </>
  
  )
  
}

export default Home
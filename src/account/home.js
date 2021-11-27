import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router';
import './homeacc.css'
import axios from 'axios';


const Home = ()=>
{
  const [userName,setUserName]=useState();
  const [userfname,setfname]=useState();
  const [userlname,setlname]=useState();
  const [userEmail,setemail]=useState();
  const [userpaid,setpaid]=useState();
  const history=useHistory();


  const data = async ()=>
  {
    
    const token=localStorage.getItem("token");


    var body = {
      token:token,
  }
  

  try{
      const res = await axios.post(
        "https://turkapi.herokuapp.com/nav",
        body,
      )
      
    try{
 
    
    const userinfo=await res.data;
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
    history.push("/signin");
  }
  }
  catch
  {
    history.push("/signin");
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
    {/* <div class="container"> */}
    <div class=" jumbotron  text-white flag">
    <br></br>
    <br></br>
    
    <div class="container profilej acc">
    <div class="jumbtron">
    <h2 class="d-flex justify-content-center  ">Account Details</h2>
    <br></br>
    <br></br>
    <div className="container">
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
    </div>  
    </div>


    <br></br>
    <br></br>
    <br></br>
    <br></br>



        
        
        
        {/* </div> */}
        <br></br>
        <br></br>
        <br></br>
    </>
  
  )
  
}

export default Home;
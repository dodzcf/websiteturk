import React,{useEffect, useState,Component} from 'react';
import axios from 'axios';
import{useHistory,Redirect} from 'react-router-dom'
// import '../signin.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {useSelector, useDispatch} from "react-redux";
import {inc,dec} from  "../reducer/userReducer";
import store from "../store";

const ForgotPassword = ()=>
{
  localStorage.getItem('jw')
  
  const history=useHistory();
  const myState=useSelector((state)=>state.num);
  const dispatch = useDispatch();
  const [usernameoremail,setEmail]=useState('');

 

const loginuser = async (e)=>
{
  e.preventDefault();

  const res = await fetch('/forgotpassword',
  {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      usernameoremail,
    })
  });

  if(res.status===404)
  {
    toast.warn("No User with this email");
  }
  if(res.status===403)
  {
    toast.warn("No User with this username");
  }
  if(res.status===400)
  {
    window.location.href="";
    
  }


}

  return(
    <section className="signup">
    <div className="container mt-5 ">
      <div className="signup-content jumbotron">
        <div className="signup-form">
        <h2>Password Change</h2>
        <form method="POST">
        <div class="form-group">
          {/* <label for="exampleInputEmail1">Email address</label> */}
          <br></br>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email or username"
            value={usernameoremail}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <br></br>
        <input type="submit" class="btn btn-primary" value="Send"
          onClick={loginuser}
        />
      </form>
        </div>
      </div>
      
      <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
             />
    </div>
  </section>
  )
}

export default ForgotPassword



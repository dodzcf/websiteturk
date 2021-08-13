import React,{useEffect, useState,Component} from 'react';
import axios from 'axios';
import{useHistory,Redirect} from 'react-router-dom'
import './signin.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {useSelector, useDispatch} from "react-redux";
import {inc,dec} from  "../reducer/userReducer";
import store from "../store";

const Signin = ()=>
{
  localStorage.getItem('jw')
  
  const history=useHistory();
  const myState=useSelector((state)=>state.num);
  const dispatch = useDispatch();
  const [usernameoremail,setEmail]=useState('');
  const [password,setPassword]=useState('');

 

const loginuser = async (e)=>
{
  e.preventDefault();

  const res = await fetch('/signin',
  {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      usernameoremail,
      password,
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
  if(res.status===405)
  {
    toast.warn("Invalid Password");
  }
  
  if(res.status===200)
  {
    toast.warn("Account Not Verified");
  }
  if(res.status===400)
  {
    localStorage.setItem('jw',0);
    window.location.href="/account/home";
    
  }


}

  return(
    <section className="signup">
    <div className="container mt-5 ">
      <div className="signup-content jumbotron logincolor">
        <div className="signup-form">
        <h2>Login</h2>
        <form method="POST">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"
            value={usernameoremail}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div>
        <a href="../forgotpassword/forgotpass">Forgot Password?</a>
        </div>
        <br></br>
        <input type="submit" class="btn btn-primary" value="Log In"
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

export default Signin



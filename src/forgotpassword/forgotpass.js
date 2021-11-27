import React,{useState} from 'react';
import{useHistory,Link} from 'react-router-dom'
import '../signin/signin.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
// import {useSelector, useDispatch} from "react-redux";

const ForgotPassword = ()=>
{
  localStorage.getItem('jw')
  
  const history=useHistory();
  // const myState=useSelector((state)=>state.num);
  const [usernameoremail,setEmail]=useState('');

 

const loginuser = async (e)=>
{
  e.preventDefault();

  var body = {
    usernameoremail:usernameoremail,
}

  const res=await axios.post(
    "https://turkapi.herokuapp.com/forgotpassword",
    body,
  );


  if(res.data==="No account")
  {
    toast.warn("No User with this email");
  }
  if(res.data==="No account")
  {
    toast.warn("No User with this username");
  }
  if(res.data==="Password Request Sent")
  {
    toast.success("Reset link has been sent to your email address");
    // history.push("/");
    
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



import './browserAPP.css';
import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProtectedRoute from './protectedrouter'
import Navbar from './browser/navbar';
import Signin from './signin/signin';
import Logout from './logout/logout';
import Signup from './login/signup';
import Intro from './browser/name';
import Social from './browser/social';
import About from './browser/about';
import Scroll from './browser/top';
import Video from './browser/video';
import Home from './account/home';
import Payment from './courses/payment';
import ForgotPassword from './forgotpassword/forgotpass';
import Card from './payment/pay';
import CourseVideo from './coursevideos/coursevideos'
// export const UserContext=createContext();

const Routing=()=>{
  
  return (
    <>
           <Route exact path="/">
  
  <Scroll showBelow={50} />
    
    
    <div className="App">
      <Switch>

        
        <Route path="/">
        <div class="head">
        <div id="intro">
          <Intro  />
          </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
          <div id="about">
          <About />
          </div>
          
          <div class="header">
          <br></br>
          <br></br>
          
          <Video />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
          <div id="socialmedia">
          
          <Social />
          
          
          </div>
          
          </div>
          
          
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div class="ocean">
          <div class="wave"></div>
          <div class="wave"></div>
          </div>
        </Route>
        
      </Switch>
    </div>
  </Route>
          <Route exact path="/signin">
            <Signin/>
           </Route>
           <Route exact path="/signup">
            <Signup/>
           </Route>
           <Route exact path="/logout">
            <Logout/>
           </Route>
           <Route exact path="/forgotpassword">
            <ForgotPassword/>
           </Route>
           <ProtectedRoute exact path="/account">
           <Home/>
           </ProtectedRoute>
           <ProtectedRoute exact path="/courses">
           <Payment/>
           </ProtectedRoute>
           <ProtectedRoute exact path="/payment">
           <Card/>
           </ProtectedRoute>
           <ProtectedRoute exact path="/coursevideos">
           <CourseVideo/>
           </ProtectedRoute>
    
    </>
  );
  }

  const BrowserApp=() => {
  
  
    return (
      <>
    <Route>
    <Navbar/>
    </Route>
    <Routing/>
    
    </>
  );
}

export default BrowserApp;

import "../browserAPP.css";
// import React, { createContext,useReducer } from "react";
import {
  BrowserRouter as 
  Switch,
  Route
} from "react-router-dom";
import Intro from './name';
import Social from './social';
import About from './about';
import Scroll from './top';
import Video from './video';

const Home=()=>{
  localStorage.setItem('jw',0);
  return (
    <>
    <Route>
    
    <Scroll showBelow={50} />
      
      
      <div className="App">
        <Switch>

          
          <Route exact path="/">
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
    
    </>
  );
  }


export default Home;

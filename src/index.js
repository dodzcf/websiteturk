import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BrowserApp from './browserAPP';
import MobileApp from './mobileAPP';
import {BrowserRouter} from "react-router-dom";
import {
  BrowserView,
  MobileView,

} from "react-device-detect";



ReactDOM.render(
  <React.StrictMode>
  
  <BrowserRouter>
  
  <BrowserView>
  <BrowserApp/>
  {/* <MobileApp/> */}
</BrowserView>
<MobileView>
<MobileApp />
</MobileView>
    
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

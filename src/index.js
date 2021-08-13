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
import store from "./store";
import {Provider} from "react-redux";

store.subscribe(()=>alert(JSON.stringify(store.getState())));


ReactDOM.render(
  <React.StrictMode>
  
  <BrowserRouter>
  
  <BrowserView>
  <Provider store={store}>
  <BrowserApp/>
  </Provider>
  {/* <MobileApp/> */}
</BrowserView>
<MobileView>
<MobileApp />
</MobileView>
    
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

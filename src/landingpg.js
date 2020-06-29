import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route} from "react-router-dom";
import Customize from './Customize';
import Welcomebtn from './Welcomebtn';
import CustomizeDefined from './CustomizeDefined';
import 'bootstrap/dist/css/bootstrap.css';
import Define from "./Define";


ReactDOM.render(


  <BrowserRouter>
  <Route path="/customize" exact component={Customize}  /> 
  <Route path="/" exact component={Welcomebtn}  />    
   <Route path="/Define" exact component={Define}/>
   <Route path="/CustomizeDefined" exact component={CustomizeDefined}/>

  </BrowserRouter>  ,
  
  document.getElementById('root')

);





// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './selectionButton';

// import * as serviceWorker from './serviceWorker';



ReactDOM.render(


<div     

style ={{      
    margin: "10",
    position: "absolute",
    top: "50%",
    right: "50%",
    transform: "translateY(-50%)",
    backgroundColor:"red"
  
  }} 




>


  <Button type = "Defined"  id="0" />


  <Button type = "Pre-Defined" id="1"  />
  
  
  </div>,

  document.getElementById('root')

);





// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

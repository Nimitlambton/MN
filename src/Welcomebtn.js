import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

import Button from './selectionButton';
 

class Welcomebtn extends React.Component{

    changeColor(id , _title){
      
  }    
  render(){

    return <div     

    style ={{      
        margin: "10",
        position: "absolute",
        top: "50%",
        right: "50%",
        transform: "translateY(-50%)",
        backgroundColor:"red"
      
      }} 
    >
      <Button type = "customize"  id="0"  name ="customize " />
    
    
      <Button type = "Define" id="1"   name ="Defined "/>
    
    
      </div>

      }

}

export default Welcomebtn ;
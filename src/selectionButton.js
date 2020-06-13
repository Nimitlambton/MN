import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

import { Redirect } from 'react-router';
 import { BrowserRouter, Route, Link } from "react-router-dom";
 import customize from './Customize'
 

class Buttons extends React.Component{







  
  //   changeColor(id , _title){
  //   if (id == 0){


  //     }   

  //     // onClick={this.changeColor.bind(this,this.props.id , this.props.type)}
  // }  

  render(){

    return <Link to={this.props.type} > 
     <button   >   {this.props.name}  </button> </Link>

      }

}

export default Buttons ;

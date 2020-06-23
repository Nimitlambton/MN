import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import {  Link } from "react-router-dom";
 
 

class Buttons extends React.Component{

 

  render(){

    return <Link to={this.props.type} > 
     <button   >   {this.props.name}  </button> </Link>
     
    }

}

export default Buttons ;

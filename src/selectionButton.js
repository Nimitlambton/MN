import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import {  Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
 

class Buttons extends React.Component{

 

  render(){

    return <Link to={this.props.type} > 
     
     <Button variant={this.props.btype}  size={this.props.size}    >     {this.props.name}  </Button> {' '}
     
     </Link>
     
    }

}

export default Buttons ;

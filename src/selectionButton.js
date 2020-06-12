import React from 'react';
import './App.css';

class Buttons extends React.Component{
  constructor() {
    super();
     this.type = this.type
     this.bNo = this.bNo
   
    


    }


    changeColor(id){
 

     if (id == 0){

      alert("ypyp")
     }else {

      alert("honeysign")

     } 

    
  }








  render(){

   
       
    return  <button  onClick={this.changeColor.bind(this,this.props.id)     }    > {this.props.type}  </button>



       
       
      }



}

export default Buttons ;

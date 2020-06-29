import React from 'react';
import Button from './selectionButton';



class CustomizeDefined extends React.Component{



 


    constructor(props){
       super(props)

       
       this.state = {

        a : props.location.about 
      
      
        }
    
    

      }
    







    render(){







        return   <div>  

            <h1 align= "center"> Customization  </h1>   
    <Button  type = "/"   name=" goBack"   >  goBack /></Button>


   <h1>  </h1> 

    <img
    

    
     src={this.props.location.about.imagename.image}  height="200  " width="200"  alt="happy" />
 
    
    </div>  
     
    }
    
    }
export default CustomizeDefined ;
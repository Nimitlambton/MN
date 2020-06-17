import React from 'react';

import Button from './selectionButton';

import image from '/Users/nimi/Desktop/college/sem3/javascript fundamentals/project/meme_nator/mn/src/Assests/m0.jpeg'
import image1 from '/Users/nimi/Desktop/college/sem3/javascript fundamentals/project/meme_nator/mn/src/Assests/m1.jpeg'
import image2 from '/Users/nimi/Desktop/college/sem3/javascript fundamentals/project/meme_nator/mn/src/Assests/m2.jpeg'
import image3 from '/Users/nimi/Desktop/college/sem3/javascript fundamentals/project/meme_nator/mn/src/Assests/m3.jpeg'
import image4 from '/Users/nimi/Desktop/college/sem3/javascript fundamentals/project/meme_nator/mn/src/Assests/m4.jpg'

class Define extends React.Component{

render(){
    return   <div>     
<Button  type = "/"   name=" goBack"   >  goBack /></Button>

<h1   align = "center"  > Use Pre-Defined Template </h1>




<img  src={image}  height='200' width='200'   onClick=""  alt="" /> 

<img  src={image1}  height='200' width='200'  alt=""  />  

<img  src={image2}  height='200' width='200' alt=""  /> 

<img  src={image3}  height='200' width='200' alt=""  /> 

<img  src={image4}  height='200' width='200'  alt=""  /> 






</div>  
 
}

}

export default Define ;
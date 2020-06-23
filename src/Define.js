import React from 'react';
import Button from './selectionButton';
import image from '/Users/nimi/Desktop/college/sem3/javascript fundamentals/project/meme_nator/mn/src/Assets/m0.jpeg'
import image1 from '/Users/nimi/Desktop/college/sem3/javascript fundamentals/project/meme_nator/mn/src/Assets/m1.jpeg'
import image2 from '/Users/nimi/Desktop/college/sem3/javascript fundamentals/project/meme_nator/mn/src/Assets/m2.jpeg'
import image3 from '/Users/nimi/Desktop/college/sem3/javascript fundamentals/project/meme_nator/mn/src/Assets/m3.jpeg'
import image4 from '/Users/nimi/Desktop/college/sem3/javascript fundamentals/project/meme_nator/mn/src/Assets/m4.jpg'
import {  Link } from "react-router-dom";



class Define extends React.Component{

render(){
    return <div>  


<Button  type = "/"   name=" goBack"   >  goBack /></Button>

<h1   align = "center"  > Use Pre-Defined Template </h1>
<Link to="/CustomizeDefined"     >

<div>
<img  src={image}  height='200' width='200'   onClick=""  alt="" /> 

<img  src={image1}  height='200' width='200'  alt=""  />  

<img  src={image2}  height='200' width='200' alt=""  /> 

<img  src={image3}  height='200' width='200' alt=""  /> 

<img  src={image4}  height='200' width='200'  alt=""  /> 
</div>

</Link>
</div>  

}

}

    export default Define ;
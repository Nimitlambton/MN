import React from 'react';
import Button from './selectionButton';
import { fabric } from 'fabric';
import image from '/Users/nimi/Desktop/college/sem3/javascript fundamentals/project/meme_nator/mn/src/Assets/m0.jpeg'
import image1 from '/Users/nimi/Desktop/college/sem3/javascript fundamentals/project/meme_nator/mn/src/Assets/m1.jpeg'
import image2 from '/Users/nimi/Desktop/college/sem3/javascript fundamentals/project/meme_nator/mn/src/Assets/m2.jpeg'
import image3 from '/Users/nimi/Desktop/college/sem3/javascript fundamentals/project/meme_nator/mn/src/Assets/m3.jpeg'
import image4 from '/Users/nimi/Desktop/college/sem3/javascript fundamentals/project/meme_nator/mn/src/Assets/m4.jpg'



class Define extends React.Component{


constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this); 
     
}

      handleClick(imgRef) {
        console.log(imgRef)
     var img  = document.getElementById("hidden");
     img.src = imgRef
     img.height = 200
     img.width = 200


      }

      handleChange3() {
         window.location.reload()}

      componentDidMount(){


        const img = this.refs.image
        img.onload = () => {

         var imgInstance = new fabric.Image(document.getElementById('hidden'))
         var Testcanvas = new fabric.Canvas("imageCanvas1")


      var textbox = new fabric.Textbox("Enter your Text", { 
        left: 50,
        top: 50,
        width: 150,
        fontSize: 20
      }
      );

      var textbox2 = new fabric.Textbox("Enter your Text2", {
      
        left: 50,
        top: 300,
        width: 150,
        fontSize: 20
      }
      );

    
    
    Testcanvas.add(textbox).setActiveObject(textbox);
    Testcanvas.add(textbox2).setActiveObject(textbox2);
    Testcanvas.setBackgroundImage(imgInstance)


    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Generate";
    btn.onclick = this.handleChange2
    document.getElementById("main").appendChild(btn);



    var btn2 = document.createElement("BUTTON");
    btn2.innerHTML = "Reset";
    document.getElementById("main").appendChild(btn2);
    btn2.onclick = this.handleChange3
    document.getElementById("photos").style.visibility = "hidden";
    
}}




render(){
    return <div>  



<Button  type = "/"   name=" goBack"   btype="danger"  >  goBack /></Button>

<h1   align = "center"  > Use Pre-Defined Template </h1>


<div id="main" > 

<div  id="photos">   

<img  src={image}  height='50' width='50'   ref="image"   alt=""  id="hello"   onClick={this.handleClick.bind(this,   image) }   />

<img  src={image1}  height='50' width='50' ref="image1"  id="ll"  alt=""  onClick={this.handleClick.bind(this,  image1)  } />  

<img  src={image2}  height='50' width='50' alt=""   onClick={this.handleClick.bind(this,image2)  }  /> 

<img  src={image3}  height='50' width='50' alt=""  onClick={this.handleClick.bind(this,image3)  } /> 

<img  src={image4}  height='50' width='50'  alt=""  onClick={this.handleClick.bind(this,image4)  } />
</div>
</div>
<br/> 
<img   alt="myimg"   id="hidden"  ref="image"   />  
<br/>
<canvas  id="imageCanvas1"  width={500} height={500} align="center"  >  </canvas>
</div>  

}



}

    export default Define ;
import React from 'react';
import Button from './selectionButton';
import { fabric } from 'fabric';
import canvasToImage from 'canvas-to-image';


class Customize extends React.Component{



//App constructor

  constructor(props){

    super(props)
    this.state = {
      file: null,
      base : null,
      test : "",
      isSet : true
    }

    this.chooseFile = this.chooseFile.bind(this)
    this.generateMEME = this.generateMEME.bind(this)
    this.reloadPage = this.reloadPage.bind(this)
  }
    //App State
   
    componentDidMount() {

 const img = this.refs.image
       

        img.onload = () => {
       var imgInstance = new fabric.Image(document.getElementById('hidden'))
       var Testcanvas = new fabric.Canvas("imageCanvas1")
 

      var textbox = new fabric.Textbox("Enter your Text", { 
        left: 50,
        top: 50,
        width: 150,
        fontSize: 20,
      }
      );

      var textbox2 = new fabric.Textbox("Enter your Text2", {
      
        left: 50,
        top: 100,
        width: 150,
        fontSize: 20
      }
      );
      Testcanvas.add(textbox).setActiveObject(textbox);
      Testcanvas.add(textbox2).setActiveObject(textbox2);
      Testcanvas.setBackgroundImage(imgInstance)




      //inserts Button to give option to generate Meme

       var btn = document.createElement("BUTTON");
       btn.innerHTML = "Generate";
       btn.onclick = this.generateMEME
       document.getElementById("main").appendChild(btn);
       btn.size = "lg"
       btn.btype = "primary"




     //inserts Button to give option to Reset  everything 

    var btn2 = document.createElement("BUTTON");
    btn2.innerHTML = "Reset";
    document.getElementById("chooseReset").appendChild(btn2);
    btn2.onclick = this.reloadPage
    document.getElementById("choose").style.visibility = "hidden";


}


      
    
}

   


    //Class functions 


    //upload FILE functions 
    chooseFile(event) {
        this.setState( {   
        
          file: URL.createObjectURL(event.target.files[0])}
        ) }




    //generate Meme function uses canvas-to-image library
      generateMEME() {
        const canvasEl = document.getElementById('imageCanvas1');
        canvasToImage(canvasEl, {
          name: 'myImage',
          type: 'jpg',
          quality: 0.7
        })
      }



      //reload pages and reset everything

      reloadPage() {
      window.location.reload() }



//render function of page , redder html elements
render(){
return  <div id ="main"> 
<Button   variant="primary" type = "/"  name=" goBack"  > </Button>
<div  id="chooseReset"  >  
<input type="file" onChange={this.chooseFile}  id="choose" />
</div>
<h1 align="center" >Customize your own meme  </h1>
<img src={this.state.file}  height="20  " width="20"  id="hidden"  ref="image"   alt="dummyImg"   />  
<canvas  id="imageCanvas1"  width={500} height={500} align="center"  >  </canvas>
</div>  

}
}

export default Customize ;

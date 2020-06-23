import React from 'react';
import Button from './selectionButton';
import { fabric } from 'fabric';


class Customize extends React.Component{

   
    componentDidMount() {


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
         
          
          var img1 = Testcanvas.getActiveObject();
          Testcanvas.remove(img1);



        }


      
    
}

    constructor(props){
        super(props)
        this.state = {
          file: null,
          base : null,
          test : "",
          isSet : true
        }

        this.handleChange = this.handleChange.bind(this)
      }


    
      handleChange(event) {



        this.setState( {   
        
          file: URL.createObjectURL(event.target.files[0])}
        )





      }

      
render(){
return  <div>
    
<Button  type = "/"  name=" goBack"  > </Button>
<input type="file" onChange={this.handleChange} />
<h1 align="center" >Customize your own meme  </h1>
<img src={this.state.file}  height="20  " width="20"  id="hidden"  ref="image"   alt="dummyImg"   />
<button onClick="" > hellow   </button>     
<canvas  id="imageCanvas1"  width={500} height={500} align="center"  >  </canvas>
</div>  

}
}

export default Customize ;

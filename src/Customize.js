import React from 'react';
import Button from './selectionButton';
import { fabric } from 'fabric';


class Customize extends React.Component{
        

    componentDidMount() {

        const img = this.refs.image

        img.onload = () => {
              
              var Testcanvas = new fabric.Canvas("imageCanvas1",{
                  
                backgroundColor: 'rgb(100,100,200)',
                backgroundImage:imgInstance
                
                
              } ).setActiveObject(Testcanvas);

              Testcanvas.renderAll()

             Testcanvas.remove(textbox , textbox2 ,imgInstance )
              

            var imgElement = document.getElementById('hidden',{

       

            });


            var imgInstance = new fabric.Image(imgElement, {

               
              });


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
          Testcanvas.setBackgroundImage(imgInstance, Testcanvas.renderAll.bind(Testcanvas), {


            backgroundImageStretch: false
            
            

          })
         

         // Testcanvas.sendBackwards(imgInstance)
          Testcanvas.bringForward(textbox)
          Testcanvas.bringForward(textbox2)


        
        
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

        console.log(event)
    
        console.log(event.target.name)

        this.setState({   
    
           
            
                file: URL.createObjectURL(event.target.files[0])

        }
        )
      }

      

render(){


    console.log(this.state.file)

return  <div>
    
<Button  type = "/"  name=" goBack"  > </Button>
<input type="file" onChange={this.handleChange} />
<h1 align="center" >Customize your own meme  </h1>
<img src={this.state.file}  height="20  " width="20"  id="hidden"  ref="image"  />



<button onClick="" > hellow   </button>   
    
<canvas  id="imageCanvas1"  width={500} height={500} align="center"  >  </canvas>
</div>  

}



}

export default Customize ;

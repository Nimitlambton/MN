import React from 'react';
import Button from './selectionButton';

class Customize extends React.Component{


    componentDidMount() {


        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const img = this.refs.image
      
        img.onload = () => {

            
// get the scale
            var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
            // get the top left position of the image
            var x = (canvas.width / 2) - (img.width / 2) * scale;
            var y = (canvas.height / 2) - (img.height / 2) * scale;
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
            ctx.font = "40px Courier"
            ctx.fillText(this.props.text, 210, 75)
        
        
        
        
        
        }
      
    

    
    
    
    }

     


    constructor(props){
        super(props)
        this.state = {
          file: null,
          base : null
        }
        this.handleChange = this.handleChange.bind(this)
      }
    
      handleChange(event) {

        console.log(event)
        
         
    
        this.setState({     
        file: URL.createObjectURL(event.target.files[0])
        }
        )


      }



render(){


    console.log(this.state.file)

return  <div>     
<Button  type = "/"  name=" goBack"  > </Button>
<h1>Customize your own meme  </h1>
<br />
<input type ="text" placeholder="Upper_text"  ></input>
<br/>
<input type ="text" placeholder="Lower_text"  ></input>
<br />
{/* <Upload></Upload> */}


<input type="file" onChange={this.handleChange}/>
        
        <img src={this.state.file}  height="200" width="200"  className="hidden"  ref="image"  />


<canvas  id="imageCanvas"  ref="canvas"    width={200} height={300}   >   jj  </canvas>

</div>  

}



}

export default Customize ;

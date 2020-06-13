import React from 'react';

import Button from './selectionButton';
import Upload from './upload';
class Customize extends React.Component{

render(){
return  <div>     
<Button  type = "/"  name=" goBack"  > </Button>
<h1>Customize your own meme  </h1>


<input type="file" id="imageLoader" name="imageLoader"/>
<br />
<input type ="text" placeholder="uppertext"  ></input>



<br/>


<input type ="text" placeholder="lowertext"  ></input>
<br />

<Upload></Upload>

<canvas  id="imageCanvas" ></canvas>

</div>  

}



}

export default Customize ;

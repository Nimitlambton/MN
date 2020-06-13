import React from 'react';

import Button from './selectionButton';
class Customize extends React.Component{

render(){
return  <div>     
<Button  type = "/"  name=" goBack"  > </Button>
<h1>Customize your own meme  </h1>

<Button   name=" Browse to upload image"  > </Button>
<br />
<input type ="text" placeholder=" uppertext"  ></input>
<br />
<input type ="text" placeholder=" lower text"  ></input>

<canvas></canvas>

</div>  

}

}

export default Customize ;
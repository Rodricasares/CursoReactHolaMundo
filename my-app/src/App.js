//import { useState } from "react";

import { Component } from "react";

const styles = {
  cuerpo: {
     backgroundColor:'gray',
     border:'solid 1px #eee',
     boxShadow:'0 5px 5px rgb(0,0,0,0.1)',
     width:'100%',
     padding:'10px 15px',
     borderRadius:'5px',
     display:'flex',
     flexDirection:'row',
     justifyContent:'space-around',
    },
  contador:{
  
  
  }

}

class App extends Component{
  state={contador:0}
  incrementar = ()=>{
    this.setState({contador:this.state.contador +1})
  }
  render(){
    return( 
      <div style={styles.cuerpo}>Contador: {this.state.contador}
      <button onClick={this.incrementar}>contador +1</button>
    </div>


    )
  }
}



export default App;

//COMPONENTE FUNCIONAL
//const App = () =>{
//const [contador, setContador]=useState(0)
//  return(
//    <div>Contador: {contador}
//      <button onClick={()=>setContador(contador +1)}>contador +1</button>
//    </div>
//  )
//}

//export default App;

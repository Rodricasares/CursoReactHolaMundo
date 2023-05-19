import { Component} from "react";

class UseStateClass extends Component{
     state = {contador: 0}
     incrementar = () =>{
         this.setState({contador: this.state.contador + 1})
     }
     
render(){
    return(
        <div> 
            Contador:{this.state.contador}
            <button onClick={this.incrementar}>Incremento contador</button>
        </div>
    )
}
}

export default UseStateClass
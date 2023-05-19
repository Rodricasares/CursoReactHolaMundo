import { useReducer, useState } from "react";
const inicial ={contador:0}

const reducer = (state, action)=>{
    switch(action.type){

        case 'inccrementar':
            return{contador:state.contador + 1}
        case 'decrementar':
            return{contador:state.contador - 1}
        case 'set':
           return {contador:action.payload}
           default:
            return state
    }
}

    const UseReducer = () =>{
       const [state, dispatch] = useReducer(reducer,inicial)
    const [valor, setValor] = useState(0)
       return (
        <div>
        Contador: {state.contador}
      <input value={valor} onChange={(e) => setValor(Number(e.target.value))}/> 
      <button onClick={() => dispatch({type: 'decrementar'})}>Menos -</button>
      <button onClick={() => dispatch({type: 'inccrementar'})}>Más +</button>
      <button onClick={() => dispatch({type: 'set', payload:valor})}>Valor inicial ··· SET</button>
        </div>
    )
    }
    export default UseReducer
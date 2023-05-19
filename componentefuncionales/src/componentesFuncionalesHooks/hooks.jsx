import { useState } from 'react'


const useContador = (inicial) =>{
const [contador, setContador]=useState(inicial)
const incrementar = () => {setContador(contador + 1)}
return[contador, incrementar]
  }  

const Hooks = () => {
  const[contador, incrementar]=useContador(0)
    return(
    <div >          
          Contador: { contador }

  <button onClick={incrementar}>Incrementar contador</button>
  
      </div>

      
  ) 
}
export default Hooks
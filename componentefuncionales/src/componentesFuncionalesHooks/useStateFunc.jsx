import { useState } from 'react'

//

const UseStateFuncional = () => {
  
  const [contador, setContador]=useState(0)
 

  return(
    <div >          
          Contador: { contador }

  <button onClick={()=> setContador(contador + 1)}>Incrementar contador</button>
  
      </div>

      
  ) 
}
export default UseStateFuncional
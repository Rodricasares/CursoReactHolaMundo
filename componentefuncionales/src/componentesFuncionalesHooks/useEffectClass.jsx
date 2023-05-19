import { useState, useEffect, Component } from 'react'
const useContador = (inicial) =>{
    const [contador, setContador]=useState(inicial)
    const incrementar = () => {setContador(contador + 1)}
    return[contador, incrementar]
      }  
class Interval extends Component{
    intervalo=''
    componentDidMount(){
        this.intervalo = setInterval(()=> console.log(this.props.contador), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalo)
    }
render(){
    return(
<p>Intervalo:</p>
    )
}

}
const UseEffectClass = () => {
    const[contador, incrementar]=useContador(0)
    useEffect(()=>{document.title = contador}
    ,[contador])
  
    return(
      <div >          
            Contador: { contador }
  
    <button onClick={incrementar}>Incrementar contador</button>
    <Interval contador={contador} />
        </div>
  
        
    ) 
  }

  export default UseEffectClass
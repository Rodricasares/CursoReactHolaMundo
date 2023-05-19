
import './App.css'
import Inicio from "./componentesFuncionalesHooks/inicio"
import UseStateClass from './componentesFuncionalesHooks/useStateClass'
import UseStateFuncional from './componentesFuncionalesHooks/useStateFunc'
import Hooks from './componentesFuncionalesHooks/hooks'
import UseReducer from './componentesFuncionalesHooks/useReducer'
import UseRef from './componentesFuncionalesHooks/useRef'
import UseEffect from './componentesFuncionalesHooks/useEffect'
import UseEffectClass from './componentesFuncionalesHooks/useEffectClass'

const App = () => {
  

  return(
    <div className="menu">
     
      <h1>Componentes Funcionales</h1>
      <div className='inicio'><Inicio /></div>
      <h1>useState Componente Funcional</h1>
      <div className='state-funcional'><UseStateFuncional /></div>
      <h1>useState Componente por Classes</h1>
      <div className='state-class'><UseStateClass /></div>
      <h1>Hooks con useState</h1>
      <div className='hooks'><Hooks /></div>

      <h1>useEffect</h1>
      <h4> **Práctica comentada por renderizado **</h4>
   {/**
      <div className='useEffect'><UseEffect /></div>
 */} 
      <h1>useEffect componente por clases</h1>
     <h4> **Práctica comentada por renderizado **</h4>
  {/**
      <div className='useEffect'><UseEffectClass /></div> 
  
 */}

      <h1>useReducer</h1>
      <div className='useReducer'><UseReducer /></div>  
    <h1>useRef</h1>
      <div className='useEffect'><UseRef /></div> 
  
      
      </div>
  ) 
}
export default App

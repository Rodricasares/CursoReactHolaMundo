
//función impuracambia el valor de retornno, la pura de lo contrario siempre mantiene el mismo valor
const impura = () => new Date().toLocaleString()
console.log(impura())
const MiComponente = ({miProp}) =>{
  return(<div>Nombre:{miProp}</div>)
}

const App = () =>{
  return(
    <MiComponente miProp={'hola mundo'}/>
  )
}

export default App;

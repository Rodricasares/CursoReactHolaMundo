
export const impura = () => new Date().toLocaleString()
console.log(impura())

//Función para nuca cambiar su valor de retorno
const MiComponente=({miProp})=>{
  return(

    <div>
      Nombre: {miProp}
<br></br>
    <div>Hora: {impura()}</div>
    </div>
    
  )
}

const Inicio = () => {
  return(
      <MiComponente  miProp={'Hola Mundo!!!'} />
      
  ) 
}
export default Inicio
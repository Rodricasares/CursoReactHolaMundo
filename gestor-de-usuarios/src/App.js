import { useState } from "react";
import useFormulario from "./hooks/userFormulario";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./components/Container";
import Button from "./components/Button";


function App() {
const [usuarios, setUsuarios]=useState([])
  const [formulario, handleChange, reset] = useFormulario({name:"", lastname:"",email:""})
  console.log(formulario);
const submit = e =>{
  e.preventDefault()
  setUsuarios([
    ...usuarios,formulario
  ])
  reset()
}

  return (

      
<div style={{marginTop:'15%'}}>
    <Container>
      <Card>
      <div style={{ padding: 20}}>
        <form onSubmit={submit}>      <h1>Gestor de Usuarios con React</h1>
        <Input 
        label="Nombre "
        name="name" 
        value={formulario.name} 
        onChange={handleChange} 
        placeholder='Nombre'
        />
        <Input 
        label="Apellido " 
        name="lastname" 
        value={formulario.lastname} 
        onChange={handleChange} 
        placeholder='Apellido'
        />
        <Input 
        label="Email " 
        name="email" 
        value={formulario.email} 
        onChange={handleChange}
        placeholder='Email'
        />
        <Button>Enviar</Button>
     </form>
    </div>
      </Card >
    <Card>
      <ul>
      {usuarios.map(user =>
       <li  key={user.email}> 
       {`${user.name} ${user.lastname}:${user.email}`}
      </li> 
     )} 
     </ul>
    </Card>
    </Container>
    </div>
  );
}

export default App;

import Input from "./Input";
import Button from "./Button";
import useFormulario from "../hooks/userFormulario";

const UserForm = ({submit}) => {
    const [formulario, handleChange, reset] = useFormulario({name:"", lastname:"",email:""})

const handleSubmit = (e) =>{
e.preventDefault()
submit(formulario)
reset()
}

return (
<form onSubmit={handleSubmit}>      <h1>Gestor de Usuarios con React</h1>
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


)

}
export default UserForm
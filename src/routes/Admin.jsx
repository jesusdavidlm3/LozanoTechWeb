import { useState } from "react";
import { Button } from "../components/Button/Button";
import { TextField } from "../components/TextField/TextField";

const Admin = () => {

    const [operation, setOperation] = useState('')
    const [logged, setLogged] = useState(false)
    const [admin, setAdmin] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()
        setLogged(true)
    }

    return(
        <div className="Admin">
            { logged ? (
                <>
                    { admin ? (
                        <>
                            <h1>Que desea hacer</h1>
                            <Button label='Agregar usuario' onClick={ () => setOperation('add') }></Button>
                            <Button label='Administrar usuarios' onClick={ () => setOperation('modify') }></Button>

                            { operation == 'add' && <>Aqui vamos a agregar usuarios</> }
                            { operation == 'modify' && <>Aqui vamos a modificar usuarios</> }
                        </>
                    ):(
                        <h1 className="rejected">usted no tiene permiso suficiente</h1>
                    ) }
                </>
            ):(
                <form onSubmit={handleSubmit}>
                    <h1>Iniciar Sesion</h1>
                    <TextField label='Correo' type='email'></TextField>
                    <TextField label='Contraseña' type='password'></TextField>

                    <Button label='Iniciar sesion' className='submit' type='submit' variant='allow'></Button>
                </form>
            ) }
        </div>
    )
}

export default Admin;
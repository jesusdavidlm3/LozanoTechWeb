import { useState } from 'react'
import { Button } from "./Button/Button";
import { TextField } from "./TextField/TextField";
import { DatabaseChanger } from './DatabaseChanger'

const LoginForm = () => {

    const [signed, setSigned]=useState(false)

    return(
        <>
            {signed ? (
                <DatabaseChanger/>
            ):(
            <form className="Form">
                <h1>Iniciar sesion</h1>
                <TextField label='Correo' type="email"></TextField>
                <TextField type="password" label='Contraseña'></TextField>

                <Button type="submit" variant='allow' label='iniciar Sesion'></Button>
            </form>)}
        </>
    )
}

export default LoginForm;
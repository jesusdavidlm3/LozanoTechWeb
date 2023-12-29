import { useState } from 'react'
import { Button } from "./Button/Button";
import { TextField } from "./TextField/TextField";
import { DatabaseChanger } from './DatabaseChanger'

const LoginForm = () => {

    const LoginInfo = {
        email: email.value,
        password: password.value,
    }

    return(
        <>
            {signed ? (
                <DatabaseChanger/>
            ):(
            <form className="Form">
                <h1>Iniciar sesion</h1>
                <TextField id='email' label='Correo' type="email"></TextField>
                <TextField id='password' type="password" label='Contraseña'></TextField>

                <Button type="submit" variant='allow' label='iniciar Sesion'></Button>
            </form>)}
        </>
    )
}

export default LoginForm;
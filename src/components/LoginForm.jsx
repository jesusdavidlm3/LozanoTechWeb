import { useState } from 'react'
import { Button } from "./Button/Button";
import { TextField } from "./TextField/TextField";
import { DatabaseChanger } from './DatabaseChanger';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '../../firebase';


const LoginForm = () => {

    const [singed, setSinged] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const userEmail = e.target[0].value;
        const userPassword = e.target[1].value;

        signInWithEmailAndPassword(Auth, userEmail, userPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            if(user != null){
                setSinged(true)
            }
        })
    }

    return(
        <>
            {singed ? (
                <DatabaseChanger/>
            ):(
            <form onSubmit={handleSubmit} className="Form">
                <h1>Iniciar sesion</h1>
                <TextField id='email' label='Correo' type="email"></TextField>
                <TextField id='password' type="password" label='Contraseña'></TextField>

                <Button type="submit" variant='allow' label='iniciar Sesion'></Button>
            </form>)}
        </>
    )
}

export default LoginForm;
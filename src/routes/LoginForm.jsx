import { useState } from 'react'
import { Button } from "../components/Button/Button";
import { TextField } from "../components/TextField/TextField";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const userEmail = e.target[0].value;
        const userPassword = e.target[1].value;

        signInWithEmailAndPassword(Auth, userEmail, userPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            if(user != null){
                navigate('/manage')
            }
        })
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="Form">
                <h1>Iniciar sesion</h1>
                <TextField id='email' label='Correo' type="email"></TextField>
                <TextField id='password' type="password" label='Contraseña'></TextField>

                <Button type="submit" variant='allow' label='iniciar Sesion'></Button>
            </form>
        </>
    )
}

export default LoginForm;
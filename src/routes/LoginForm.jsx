import { useState, useContext, useEffect } from 'react'
import { Button } from "../components/Button/Button";
import { TextField } from "../components/TextField/TextField";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { loggedUserContext } from '../context/loggedUserContext';
import { getUserInfo } from '../functions/firebaseQuerys';
import { hash } from '../functions/encrypt';

const LoginForm = () => {

    const { setUserRealName, setLogged, logged, setAdmin } = useContext(loggedUserContext)
    const navigate = useNavigate()

    useEffect( () => {
        if(logged == true){
            navigate('/manage')
        }
    } )

    async function handleSubmit(e){
        e.preventDefault()
        const userEmail = e.target[0].value;
        const userPassword = await hash(e.target[1].value);

        signInWithEmailAndPassword(Auth, userEmail, userPassword)
        .then(async (userCredential) => {
            const user = userCredential.user;
            if(user != null){
                let userInfo = await getUserInfo(user.uid)
                setAdmin(userInfo.admin)
                setUserRealName(userInfo.name)
                setLogged(true)
                navigate('/manage')
            }
        })
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="Login">
                <h1>Iniciar sesion</h1>
                <TextField id='email' label='Correo' type="email"></TextField>
                <TextField id='password' type="password" label='Contraseña'></TextField>

                <Button type="submit" variant='allow' label='iniciar Sesion'></Button>
                <p onClick={ () => navigate('/Admin') }>Ingresar como administrador</p>
            </form>
        </>
    )
}

export default LoginForm;
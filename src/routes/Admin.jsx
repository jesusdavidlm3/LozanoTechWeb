import { useState, useContext } from "react";
import { Button } from "../components/Button/Button";
import { TextField } from "../components/TextField/TextField";
import { loggedUserContext } from "../context/loggedUserContext"; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Auth } from '../../firebase';
import { getUserInfo, saveUserInfo } from "../functions/firebaseQuerys";
import { useNavigate } from "react-router-dom";
import searchLogo from '../img/icons/search.png'
import { CheckBox } from "../components/CheckBox/CheckBox"; 
import { hash } from "../functions/encrypt";

const Admin = () => {

    const navigate = useNavigate()
    const [operation, setOperation] = useState('')
    const [createSuccess, setCreateSuccess] = useState(false)
    const { admin, setAdmin, logged, setLogged, userRealName, setUserRealName } = useContext(loggedUserContext)

    async function handleLogin(e){
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
            }
        })
    }

    async function handleRegister(e){
        e.preventDefault()
        const newUserEmail = e.target[0].value
        const newUserName = e.target[1].value
        const newUserPassword = await hash(e.target[2].value)
        const newUserAdmin = e.target[3].checked
        createUserWithEmailAndPassword(Auth, newUserEmail, newUserPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            saveUserInfo(user.uid, newUserAdmin, newUserName)
            setCreateSuccess(true)
        })
        console.log(newUserPassword)
    }

    function handleLogOut(){
        setLogged(false)
        setAdmin(false)
        setUserRealName('')
        navigate('/home')
    }

    return(
        <div className="Admin">
            { logged ? (
                <>
                    { admin ? (
                        <div className="operations">
                            <h1>Que desea hacer</h1>
                            <Button variant='action' label='Agregar usuario' onClick={ () => setOperation('add') }></Button>
                            <Button variant='action' label='Administrar usuarios' onClick={ () => setOperation('modify') }></Button>
                            <Button variant='deny' label='Salir' onClick={ () => handleLogOut() }></Button>
                            
                            { operation == 'add' && 
                                <div className="formNew">
                                    <form onSubmit={handleRegister}>
                                        <h1>Ingrese los datos a registrar</h1>
                                        { createSuccess && <h3>Usuario creado satisfactoriamente</h3> }
                                        <TextField label='Correo Electronico' type='email'></TextField>
                                        <TextField label='Nombre'></TextField>
                                        <TextField
                                            label='Contraseña'
                                            type='password'
                                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*]).{8,20}$"
                                            title='La contraseña debe contener de 8 a 20 caracteres, numeros y letras mayusculas y minusculas ademas de uno de los caracteres: !, @, #, $, %*'
                                        ></TextField>
                                        {/* <label htmlFor='chkadm'><input id='chkadm' type="checkbox"/>Administrador</label> */}
                                        <CheckBox label='Admin'></CheckBox>
                                        <Button label='Registrar' type='submit' variant='allow'></Button>
                                    </form>
                                </div> }

                            { operation == 'modify' && 
                                <div className="adminUsers">
                                    <div className="navBar">
                                        <form>
                                            <TextField></TextField>
                                            <button type="submit">
                                                <img src={searchLogo}/>
                                            </button>
                                        </form>
                                    </div>

                                    <div className="searchResult"></div>
                                </div>
                            }
                        </div>
                    ):(
                        <>
                            <h1 className="rejected">usted no tiene permiso suficiente</h1>
                            <Button variant='deny' label='Salir' onClick={ () => handleLogOut() }></Button>
                        </>
                    ) }
                </>
            ):(
                <form onSubmit={handleLogin}>
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
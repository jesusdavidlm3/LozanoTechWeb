import { useState, useContext } from "react";
import { Button } from "../components/Button/Button";
import { TextField } from "../components/TextField/TextField";
import { loggedUserContext } from "../context/loggedUserContext"; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore"
import { Auth } from '../../firebase';
import { db } from "../../firebase"; 

const Admin = () => {

    const [operation, setOperation] = useState('')
    const [logged, setLogged] = useState(false)
    const { admin, setAdmin } = useContext(loggedUserContext)

    async function checkAdmin(id) {
        const docRef = doc(db, 'users', id);
        const docSnap = await getDoc(docRef);
        let adminVerify = docSnap.data()
        setAdmin(adminVerify.admin);
    }

    async function handleSubmit(e){
        e.preventDefault()
        const userEmail = e.target[0].value;
        const userPassword = e.target[1].value;

        signInWithEmailAndPassword(Auth, userEmail, userPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            if(user != null){
                setLogged(true)
                checkAdmin(user.uid)
            }
        })
    }

    async function handleRegister(e){
        e.preventDefault()
        const newUserEmail = e.target[0].value
        const newUserPassword = e.target[1].value
        const newUserAdmin = e.target[2].checked

        createUserWithEmailAndPassword(Auth, newUserEmail, newUserPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(newUserAdmin)
        })
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

                            { operation == 'add' && 
                                <div className="formNew">
                                    <form onSubmit={handleRegister}>
                                        <TextField label='Correo Electronico' type='email'></TextField>
                                        <TextField label='Contraseña' type='password'></TextField>
                                        <label for='chkadm'><input id='chkadm' type="checkbox"/>Administrador</label>
                                        

                                        <Button label='Registrar' type='submit' variant='allow'></Button>
                                    </form>
                                </div> }
                            { operation == 'modify' && <>Aqui vamos a modificar usuarios</> }
                        </div>
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
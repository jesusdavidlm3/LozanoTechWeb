import { useState, useContext } from "react";
import { Button } from "../components/Button/Button";
import { TextField } from "../components/TextField/TextField";
import { loggedUserContext } from "../context/loggedUserContext"; 
import { signInWithEmailAndPassword } from 'firebase/auth';
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

    return(
        <div className="Admin">
            { logged ? (
                <>
                    { admin ? (
                        <div className="operations">
                            <h1>Que desea hacer</h1>
                            <Button variant='action' label='Agregar usuario' onClick={ () => setOperation('add') }></Button>
                            <Button variant='action' label='Administrar usuarios' onClick={ () => setOperation('modify') }></Button>

                            { operation == 'add' && <>Aqui vamos a agregar usuarios</> }
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
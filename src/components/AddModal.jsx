import { Button } from "./Button/Button"
import { TextField } from "./TextField/TextField"
import { db } from "../../firebase" 
import { doc, setDoc } from "firebase/firestore"
import { useState, useContext } from "react"
import { loggedUserContext } from "../context/loggedUserContext"
import { Capitalize, PhoneNormalize } from "../functions/NormalizeInfo" 

export const AddModal = ({closeModal}) => {

    const [created, setCreated] = useState(false)
    const { userRealName } = useContext(loggedUserContext)
    const date = new Date()
    const fecha = date.toLocaleDateString()

    async function handleSubmit(e){
        e.preventDefault()
        await setDoc(doc(db, "repairStatus", e.target[0].value), {
            client: Capitalize(e.target[1].value),
            phone: PhoneNormalize(e.target[2].value),
            device: e.target[3].value,
            state: e.target[4].value,
            notes: e.target[5].value,
            created: fecha,
            modified: fecha,
            creator: userRealName,
            modifier: userRealName,
        });
        setCreated(true)
    }

    return(
        <div className="ModalContainer">
            <div className="AddModal">
                <h1>Ingrese los datos del nuevo registro</h1>
                { created && <p>Registro agreado con exito</p> }
                <form onSubmit={handleSubmit}>
                    <TextField label='Numero de control'></TextField>
                    <TextField label='Nombre'></TextField>
                    <TextField label='Telefono'></TextField>
                    <TextField label='Equipo'></TextField>
                    <TextField label='Estado'></TextField>
                    <TextField label='Notas'></TextField>
                    <Button className='modalButtonAdd' label='Agregar' type='submit' variant='allow'></Button>
                </form>

                <Button className='modalButtonClose' label='Cerrar' variant='deny' onClick={ () => closeModal() }></Button>
            </div>

        </div>
    )
}
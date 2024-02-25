import { Button } from "./Button/Button"
import { TextField } from "./TextField/TextField" 
import { db } from "../../firebase" 
import { useState, useContext } from "react"
import { doc, setDoc } from "firebase/firestore"
import { loggedUserContext } from "../context/loggedUserContext" 

export const EditModal = ({docId, docInfo, closeModal}) => {

    const {userRealName} = useContext(loggedUserContext)
    const [edited, setEdited] = useState(false)
    const date = new Date()
    const fecha = date.toLocaleDateString()

    async function handleConfirm(e){
        e.preventDefault()
        await setDoc(doc(db, "repairStatus", e.target[0].value), {
            client: e.target[1].value,
            device: e.target[2].value,
            state: e.target[3].value,
            notes: docInfo.notes + " \| " + e.target[4].value,
            created: docInfo.created,
            modified: fecha,
            creator: docInfo.creator,
            modifier: userRealName,
        });
        setEdited(true)
    }

    return(
        <div className="ModalContainer">
            <div className="EditModal">
                <h1>Modo de edicion</h1>
                { edited && <p>Registro editado con exito</p> }
                <form onSubmit={handleConfirm}>
                    <TextField label={`Numero de control: ${docId}`} value={docId} readOnly='readOnly'></TextField>
                    <TextField label={`Cliente: ${docInfo.client}`} value={docInfo.client} readOnly='readOnly'></TextField>
                    <TextField label={`Equipo: ${docInfo.device}`} value={docInfo.device} readOnly='readOnly'></TextField>
                    <TextField label={`Estado: ${docInfo.state}`}></TextField>
                    <TextField label='Notas:'></TextField>

                    <Button className='modalButtonSave' label='Guardar' variant='allow' type='submit'></Button>
                </form>
                <Button className='modalButtonClose' label='Cerrar' variant='deny' onClick={ () => closeModal() }></Button>
            </div>
        </div>
    )
}
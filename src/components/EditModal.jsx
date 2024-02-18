import { Button } from "./Button/Button"
import { TextField } from "./TextField/TextField" 
import { db } from "../../firebase" 

export const EditModal = ({docId, docInfo, closeModal}) => {

    const date = new Date()
    const fecha = date.toLocaleDateString()

    const handleConfirm = (e) => {
        e.preventDefault()
        const newInfo = {
            state: e.target[3].value,
            notes: docInfo.notes + ' ' + e.target[4].value,
            modified: fecha,
        }
        console.log(newInfo)
    }

    return(
        <div className="ModalContainer">
            <div className="EditModal">
                <h1>Modo de edicion</h1>
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
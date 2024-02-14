import { Button } from "./Button/Button"
import { TextField } from "./TextField/TextField" 
import { db } from "../../firebase" 

export const EditModal = ({closeModal}) => {

    const handleConfirm = () => {
        console.log('Eliminaste este registro')
    }

    return(
        <div className="ModalContainer">
            <div className="EditModal">
                <h1>Modo de edicion</h1>
                <form>
                    <TextField label='Campo 1'></TextField>
                    <TextField label='Campo 2'></TextField>
                    <TextField label='Campo 3'></TextField>
                    <TextField label='Campo 4'></TextField>
                    <TextField label='Campo 5'></TextField>

                    <Button className='modalButtonClose' label='Guardar' variant='allow' onClick={ () => closeModal() }></Button>
                </form>
                <Button className='modalButtonClose' label='Cerrar' variant='deny' onClick={ () => closeModal() }></Button>
            </div>
        </div>
    )
}
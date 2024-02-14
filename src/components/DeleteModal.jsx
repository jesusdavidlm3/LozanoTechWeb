import { Button } from "./Button/Button"
import { db } from "../../firebase" 

export const DeleteModal = ({closeModal}) => {

    const handleConfirm = () => {
        console.log('Eliminaste este registro')
    }

    return(
        <div className="ModalContainer">
            <div className="DeleteModal">
                <h1>Seguro de que desea eliminar este registro?</h1>
                <div className="buttons">
                    <Button label='Confirmar' variant='allow' onClick={ () => handleConfirm() }></Button>
                    <Button className='modalButtonClose' label='Cerrar' variant='deny' onClick={ () => closeModal() }></Button>
                </div>

            </div>
        </div>
    )
}
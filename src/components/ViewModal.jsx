import { Button } from "./Button/Button"
import { db } from "../../firebase" 

export const ViewModal = ({closeModal}) => {

    return(
        <div className="ModalContainer">
            <div className="ViewModal">
                <h1>Informacion</h1>
                    <h3>Nombre</h3>
                    <h3>Equipo</h3>
                    <h3>Estado</h3>
                    <h3>Fecha de recibido</h3>
                    <h3>Notas</h3>
                    <h3>Moodificado por</h3>
                    <Button className='modalButtonClose' label='Cerrar' variant='deny' onClick={ () => closeModal() }></Button>
            </div>
        </div>
    )
}
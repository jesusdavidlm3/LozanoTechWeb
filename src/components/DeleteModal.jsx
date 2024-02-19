import { doc, deleteDoc } from "firebase/firestore";
import { Button } from "./Button/Button"
import { db } from "../../firebase" 
import { useState } from "react";

export const DeleteModal = ({closeModal, docId}) => {

    const [deleted, setDeleted] = useState(false)

    async function handleConfirm(){
        await deleteDoc(doc(db, "repairStatus", docId));
        setDeleted(true)
    }

    return(
        <div className="ModalContainer">
            <div className="DeleteModal">
                <h1>Seguro de que desea eliminar este registro?</h1>
                { deleted && <p>Registro borrado con exito</p> }
                <div className="buttons">
                    <Button label='Confirmar' variant='allow' onClick={ () => handleConfirm() }></Button>
                    <Button className='modalButtonClose' label='Cerrar' variant='deny' onClick={ () => closeModal() }></Button>
                </div>
            </div>
        </div>
    )
}
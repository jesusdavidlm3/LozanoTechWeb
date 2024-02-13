import { Button } from "./Button/Button"
import { TextField } from "./TextField/TextField"
import { db } from "../../firebase" 
import { QuerySnapshot, collection, count } from "firebase/firestore" 
import { useState } from "react"

export const AddModal = ({closeModal}) => {

    const [control, setControl] = useState('')

    const collectionRef = collection(db, 'repairStatus')
    console.log(collectionRef)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <div className="ModalContainer">
            <div className="AddModal">
                <h1>Ingrese los datos del nuevo registro</h1>
                <form onSubmit={handleSubmit}>
                    <TextField label={control} value={control}></TextField>
                    <TextField label='Nombre'></TextField>
                    <TextField label='Equipo'></TextField>
                    <TextField label='Estado'></TextField>
                    <Button className='modalButtonAdd' label='Agregar' type='submit' variant='allow'></Button>
                </form>

                <Button className='modalButtonClose' label='Cerrar' variant='deny' onClick={ () => closeModal() }></Button>
            </div>

        </div>
    )
}
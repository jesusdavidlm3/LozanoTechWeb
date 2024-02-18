import { Button } from "./Button/Button"
import { TextField } from "./TextField/TextField"
import { db } from "../../firebase" 
import { QuerySnapshot, collection, count } from "firebase/firestore" 
import { useState } from "react"

export const AddModal = ({closeModal}) => {

    const date = new Date()
    const fecha = date.toLocaleDateString()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newInfo = {
            control: e.target[0].value,
            client: e.target[1].value,
            phone: e.target[2].value,
            device: e.target[3].value,
            state: e.target[4].value,
            notes: e.target[5].value,
            created: fecha,
            modified: fecha,
        }
        console.log(newInfo)
    }

    return(
        <div className="ModalContainer">
            <div className="AddModal">
                <h1>Ingrese los datos del nuevo registro</h1>
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
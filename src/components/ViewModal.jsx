import { doc, getDoc } from "firebase/firestore";
import { Button } from "./Button/Button"
import { db } from "../../firebase" 
import { useEffect } from "react"; 
import { useState } from "react"; 

export const ViewModal = ({docInfo, closeModal}) => {

    return(
        <div className="ModalContainer">
            <div className="ViewModal">
                <h1>Informacion</h1>
                    <h3>Cliente: {docInfo.client}</h3>
                    <h3>Equipo: {docInfo.device}</h3>
                    <h3>Telefono: {docInfo.phone}</h3>
                    <h3>Estado: {docInfo.state}</h3>
                    <h3>Recibido el: {docInfo.created} por {docInfo.modifier}</h3>
                    <h3>Modificado el {docInfo.modified} por {docInfo.modifier}</h3>
                    <h3>Notas: {docInfo.notes}</h3>
                    <Button className='modalButtonClose' label='Cerrar' variant='deny' onClick={ () => closeModal() }></Button>
            </div>
        </div>
    )
}